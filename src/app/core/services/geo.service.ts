/**
 * core/services/geo.service.ts
 *
 * Handles geolocation and distance calculation:
 *   1. Caches the user's GPS position once (at login) to avoid repeated permission dialogs.
 *   2. Computes straight-line distance (km) via Haversine formula.
 *   3. Geocodes text addresses using Nominatim (OpenStreetMap) as fallback.
 *   4. Provides place-search autocomplete for the event creation form.
 */

import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from, of } from 'rxjs';
import { map, catchError, switchMap, tap } from 'rxjs/operators';

export interface LatLng {
  lat: number;
  lng: number;
}

export interface PlaceSuggestion {
  displayName: string;
  shortName: string;
  lat: number;
  lng: number;
}

interface NominatimResult {
  lat: string;
  lon: string;
  display_name: string;
  name?: string;
  address?: {
    road?: string;
    suburb?: string;
    city?: string;
    county?: string;
    state?: string;
  };
}

@Injectable({ providedIn: 'root' })
export class GeoService {
  private readonly http = inject(HttpClient);

  /** Cached user position — set once at login via captureUserPosition(). */
  private cachedPosition: LatLng | null = null;

  // ---------------------------------------------------------------------------
  // City name display (sidebar)
  // ---------------------------------------------------------------------------

  readonly cityName = signal<string>('Obteniendo ubicación...');
  readonly cityLoading = signal(true);
  private cityResolved = false;

  /** Resolves city name once app-wide. Subsequent calls are no-ops. */
  resolveCityName(): void {
    if (this.cityResolved) return;
    this.cityResolved = true;

    if (!navigator.geolocation) {
      this.cityName.set('Ubicación no disponible');
      this.cityLoading.set(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        this.cachedPosition = { lat: latitude, lng: longitude };
        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`,
            { headers: { 'Accept-Language': 'es' } }
          );
          const data = await res.json();
          const city =
            data.address?.city ||
            data.address?.town ||
            data.address?.village ||
            data.address?.county ||
            'Tu ubicación';
          const country = data.address?.country_code?.toUpperCase() ?? '';
          this.cityName.set(`${city}${country ? ', ' + country : ''}`);
        } catch {
          this.cityName.set(`${latitude.toFixed(2)}°, ${longitude.toFixed(2)}°`);
        }
        this.cityLoading.set(false);
      },
      () => {
        this.cityName.set('Ubicación no disponible');
        this.cityLoading.set(false);
      },
      { enableHighAccuracy: true, timeout: 10_000, maximumAge: 0 }
    );
  }

  // ---------------------------------------------------------------------------
  // User position
  // ---------------------------------------------------------------------------

  /**
   * Requests GPS once and caches the result.
   * Call this right after a successful login so the position is ready
   * before the user tries to join an event.
   */
  captureUserPosition(): void {
    if (this.cachedPosition) return;
    this._requestGPS().subscribe(pos => {
      this.cachedPosition = pos;
      if (pos) console.log('[GeoService] Posición del usuario cacheada:', pos);
      else console.warn('[GeoService] No se pudo obtener posición GPS para cachear.');
    });
  }

  /** Clears the cached position (on logout). */
  clearCachedPosition(): void {
    this.cachedPosition = null;
  }

  // ---------------------------------------------------------------------------
  // Distance calculation
  // ---------------------------------------------------------------------------

  /**
   * Returns the distance in km between the user and an event.
   *
   * @param eventCoords - Pre-stored event coordinates (preferred).
   *                      When provided, skips Nominatim geocoding entirely.
   * @param address     - Fallback text address for Nominatim if no coords are stored.
   */
  distanceToEvent(
    eventCoords: LatLng | undefined,
    address: string,
  ): Observable<number | null> {
    const userPos = this.cachedPosition;

    // If we still don't have user coords, try a one-shot GPS request
    if (!userPos) {
      return this._requestGPS().pipe(
        tap(pos => { this.cachedPosition = pos; }),
        switchMap(pos => this._computeDistance(pos, eventCoords, address)),
      );
    }

    return this._computeDistance(userPos, eventCoords, address);
  }

  /**
   * Haversine great-circle distance in km.
   */
  haversineKm(a: LatLng, b: LatLng): number {
    const R = 6_371;
    const toRad = (d: number) => (d * Math.PI) / 180;
    const dLat = toRad(b.lat - a.lat);
    const dLng = toRad(b.lng - a.lng);
    const h =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLng / 2) ** 2;
    return R * 2 * Math.asin(Math.sqrt(h));
  }

  // ---------------------------------------------------------------------------
  // Place search (autocomplete)
  // ---------------------------------------------------------------------------

  /**
   * Searches for places matching `query` via Nominatim, restricted to Chile.
   * Use this for the location input autocomplete in the event creation form.
   */
  searchPlaces(query: string): Observable<PlaceSuggestion[]> {
    if (!query || query.length < 3) return of([]);
    const url =
      `https://nominatim.openstreetmap.org/search` +
      `?q=${encodeURIComponent(query)}` +
      `&format=json&limit=5&countrycodes=cl&addressdetails=1`;
    return this.http
      .get<NominatimResult[]>(url, { headers: { 'Accept-Language': 'es' } })
      .pipe(
        map(results =>
          results.map(r => ({
            displayName: r.display_name,
            shortName: this._shortName(r),
            lat: parseFloat(r.lat),
            lng: parseFloat(r.lon),
          })),
        ),
        catchError(() => of([])),
      );
  }

  // ---------------------------------------------------------------------------
  // Private helpers
  // ---------------------------------------------------------------------------

  private _requestGPS(): Observable<LatLng | null> {
    if (!navigator.geolocation) {
      console.warn('[GeoService] navigator.geolocation no disponible.');
      return of(null);
    }
    return from(
      new Promise<LatLng | null>(resolve => {
        navigator.geolocation.getCurrentPosition(
          pos =>
            resolve({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
          err => {
            console.warn('[GeoService] Error GPS:', err.code, err.message);
            resolve(null);
          },
          { timeout: 10_000, maximumAge: 300_000 },
        );
      }),
    );
  }

  private _geocodeAddress(address: string): Observable<LatLng | null> {
    // Append ", Chile" if not already present to improve Nominatim results
    const query = /chile/i.test(address) ? address : `${address}, Chile`;
    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&limit=1`;
    return this.http
      .get<NominatimResult[]>(url, { headers: { 'Accept-Language': 'es' } })
      .pipe(
        map(results => {
          if (results.length === 0) {
            console.warn('[GeoService] Nominatim: sin resultados para:', query);
            return null;
          }
          return { lat: parseFloat(results[0].lat), lng: parseFloat(results[0].lon) };
        }),
        catchError(() => of(null)),
      );
  }

  private _computeDistance(
    userCoords: LatLng | null,
    eventCoords: LatLng | undefined,
    address: string,
  ): Observable<number | null> {
    if (!userCoords) return of(null);

    // Prefer stored event coordinates (no HTTP request needed)
    if (eventCoords?.lat && eventCoords?.lng) {
      const km = parseFloat(this.haversineKm(userCoords, eventCoords).toFixed(1));
      console.log('[GeoService] Distancia (coords directas):', km, 'km');
      return of(km);
    }

    // Fallback: geocode the address string
    return this._geocodeAddress(address).pipe(
      map(coords => {
        if (!coords) return null;
        const km = parseFloat(this.haversineKm(userCoords, coords).toFixed(1));
        console.log('[GeoService] Distancia (geocodificado):', km, 'km');
        return km;
      }),
    );
  }

  /** Builds a short, human-readable name from a Nominatim result. */
  private _shortName(r: NominatimResult): string {
    const parts: string[] = [];
    if (r.name) parts.push(r.name);
    else if (r.address?.road) parts.push(r.address.road);
    if (r.address?.suburb) parts.push(r.address.suburb);
    else if (r.address?.city) parts.push(r.address.city);
    return parts.length ? parts.join(', ') : r.display_name.split(',').slice(0, 2).join(',');
  }
}
