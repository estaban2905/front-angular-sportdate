import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngxs/store';
import {
  LucideAngularModule,
  Swords, Trophy, Star, Users, User,
  Shield, ChevronRight, MapPin, Loader,
} from 'lucide-angular';
import { DescubrirActions, DescubrirSelectors } from '@store/descubrir';
import { AuthSelectors } from '@store/auth';
import { Reto, RetoStatus, Profile } from '@core/models';

type Tab = 'Retos' | 'Resultados' | 'Calificaciones' | 'Oponentes';
type OponenteMode = 'Individual' | 'Equipo';

@Component({
  selector: 'app-descubrir',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './descubrir.component.html',
})
export class DescubrirComponent implements OnInit {
  private readonly store = inject(Store);

  // Icons
  readonly swordsIcon   = Swords;
  readonly trophyIcon   = Trophy;
  readonly starIcon     = Star;
  readonly usersIcon    = Users;
  readonly userIcon     = User;
  readonly shieldIcon   = Shield;
  readonly chevronRight = ChevronRight;
  readonly mapPinIcon   = MapPin;
  readonly loaderIcon   = Loader;

  // State
  readonly tabs: Tab[] = ['Retos', 'Resultados', 'Calificaciones', 'Oponentes'];
  activeTab    = signal<Tab>('Retos');
  oponenteMode = signal<OponenteMode>('Individual');
  sportFilter  = signal<string>('Todos');
  readonly sportFilters = ['Todos', '⚽', '🏓', '🎾', '🏀', '🏃'];

  // Store selectors
  readonly retos          = this.store.selectSignal(DescubrirSelectors.retos);
  readonly resultados     = this.store.selectSignal(DescubrirSelectors.resultados);
  readonly calificaciones = this.store.selectSignal(DescubrirSelectors.calificaciones);
  readonly oponentesRaw   = this.store.selectSignal(DescubrirSelectors.oponentes);
  readonly loading        = this.store.selectSignal(DescubrirSelectors.loading);
  private readonly currentUser = this.store.selectSignal(AuthSelectors.user);

  get myUid(): string { return this.currentUser()?.uid ?? ''; }

  readonly filteredOponentes = computed(() => {
    const mode  = this.oponenteMode();
    const sport = this.sportFilter();
    return this.oponentesRaw().filter((p: Profile) => {
      const sportMatch = sport === 'Todos' || p.sports?.some(s =>
        sport === '⚽' ? s.name === 'Fútbol'     :
        sport === '🏓' ? s.name === 'Padel'      :
        sport === '🎾' ? s.name === 'Tenis'      :
        sport === '🏀' ? s.name === 'Baloncesto' :
        sport === '🏃' ? s.name === 'Running'    : false,
      );
      return sportMatch;
    });
  });

  readonly retosStats = computed(() => {
    const acc: Partial<Record<RetoStatus, number>> = {};
    for (const r of this.retos()) acc[r.status] = (acc[r.status] ?? 0) + 1;
    return acc;
  });

  ngOnInit(): void {
    this.store.dispatch(new DescubrirActions.Load());
  }

  // ── Actions ──────────────────────────────────────────────────────────────

  aceptarReto(retoId: string): void {
    this.store.dispatch(new DescubrirActions.UpdateRetoStatus(retoId, 'aceptado'));
  }

  rechazarReto(retoId: string): void {
    this.store.dispatch(new DescubrirActions.UpdateRetoStatus(retoId, 'rechazado'));
  }

  // ── Helpers ──────────────────────────────────────────────────────────────

  statusConfig(status: RetoStatus) {
    const map: Record<RetoStatus, { label: string; classes: string }> = {
      pendiente:  { label: 'Pendiente',  classes: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' },
      aceptado:   { label: 'Aceptado',   classes: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' },
      completado: { label: 'Completado', classes: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' },
      rechazado:  { label: 'Rechazado',  classes: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' },
    };
    return map[status];
  }

  stars(rating: number): boolean[] {
    return Array.from({ length: 5 }, (_, i) => i < Math.round(rating));
  }

  resultBorderClass(equipoLocalId: string | undefined, equipoVisitaId: string | undefined, golesLocal: number, golesVisita: number): string {
    const uid = this.myUid;
    const isMeLocal  = !!uid && equipoLocalId  === uid;
    const isMeVisita = !!uid && equipoVisitaId === uid;
    if (!isMeLocal && !isMeVisita) return '';
    const ganamos = (isMeLocal && golesLocal > golesVisita) || (isMeVisita && golesVisita > golesLocal);
    return ganamos ? 'border-l-4 border-green-500' : 'border-l-4 border-red-400';
  }

  isMiEquipoLocal(equipoLocalId: string | undefined): boolean {
    const uid = this.myUid;
    return !!uid && equipoLocalId === uid;
  }

  isMiEquipoVisita(equipoVisitaId: string | undefined): boolean {
    const uid = this.myUid;
    return !!uid && equipoVisitaId === uid;
  }

  isRetador(reto: Reto): boolean {
    const uid = this.myUid;
    return !!uid && reto.defiadorId === uid;
  }
}
