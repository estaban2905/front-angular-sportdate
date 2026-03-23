/**
 * core/services/http-seed.service.ts
 *
 * HTTP-based seed service to populate backend with initial mock data.
 * Replaces FirestoreSeedService.
 *
 * This service communicates with a backend endpoint to seed/clear data.
 *
 * Public API:
 *   seedIfEmpty()             — safe to call on every boot
 *   resetAndSeed()            — wipes all collections + re-seeds
 *   clearAll()                — wipes all collections without re-seeding
 *   restoreCollection(name)   — wipes one collection + restores its mock data
 */

import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';

@Injectable({ providedIn: 'root' })
export class HttpSeedService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.apiUrl}/seed`;

  /**
   * Checks if the database has already been seeded.
   * If not, seeds it with mock data.
   * Safe to call on every boot (idempotent).
   */
  async seedIfEmpty(): Promise<void> {
    try {
      await this.http.post<void>(`${this.apiUrl}/seed-if-empty`, {}).toPromise();
    } catch (err) {
      console.warn('Failed to seed database:', err);
    }
  }

  /**
   * Wipes all collections and re-seeds with mock data.
   */
  async resetAndSeed(): Promise<void> {
    try {
      await this.http.post<void>(`${this.apiUrl}/reset-and-seed`, {}).toPromise();
    } catch (err) {
      console.error('Failed to reset and seed:', err);
      throw err;
    }
  }

  /**
   * Wipes all collections without re-seeding.
   */
  async clearAll(): Promise<void> {
    try {
      await this.http.post<void>(`${this.apiUrl}/clear-all`, {}).toPromise();
    } catch (err) {
      console.error('Failed to clear all:', err);
      throw err;
    }
  }

  /**
   * Wipes one collection and restores its mock data.
   */
  async restoreCollection(name: string): Promise<void> {
    try {
      await this.http.post<void>(`${this.apiUrl}/restore-collection`, { name }).toPromise();
    } catch (err) {
      console.error(`Failed to restore collection ${name}:`, err);
      throw err;
    }
  }
}
