/**
 * core/constants/sports.constants.ts
 *
 * Centralized sport names and filter options used across multiple pages
 * (Match, Eventos, Grupos, etc.). Single source of truth — avoid duplicating
 * sport lists in individual components.
 */

/** A modality/format for a specific sport (e.g. "Fútbol 5", "Singles"). */
export interface SportModality {
  /** Display label shown in the UI. */
  label: string;
  /** Stored value in the event record. */
  value: string;
  /** Default max-participant count for this modality. */
  defaultPlayers: number;
}

/** Full configuration for a sport used when creating/editing events. */
export interface SportConfig {
  emoji: string;
  modalities: SportModality[];
  /** Court/surface types applicable to this sport. Omit if not relevant. */
  courtTypes?: string[];
  /** Whether skill-level (Principiante/Intermedio/Avanzado) makes sense. */
  hasLevel: boolean;
}

/** Per-sport configuration: modalities, defaults, court types. */
export const SPORT_CONFIG: Record<string, SportConfig> = {
  'Fútbol': {
    emoji: '⚽',
    modalities: [
      { label: 'Fútbol 5',  value: 'Fútbol 5',  defaultPlayers: 10 },
      { label: 'Fútbol 6',  value: 'Fútbol 6',  defaultPlayers: 12 },
      { label: 'Fútbol 7',  value: 'Fútbol 7',  defaultPlayers: 14 },
      { label: 'Futsal',    value: 'Futsal',     defaultPlayers: 10 },
      { label: 'Fútbol 11', value: 'Fútbol 11', defaultPlayers: 22 },
    ],
    courtTypes: ['Pasto Sintético', 'Pasto Natural', 'Cemento', 'Indoor'],
    hasLevel: true,
  },
  'Padel': {
    emoji: '🏓',
    modalities: [
      { label: 'Dobles', value: 'Dobles', defaultPlayers: 4 },
      { label: 'Mixto',  value: 'Mixto',  defaultPlayers: 4 },
    ],
    courtTypes: ['Indoor', 'Outdoor', 'Cristal', 'Muro'],
    hasLevel: true,
  },
  'Tenis': {
    emoji: '🎾',
    modalities: [
      { label: 'Singles', value: 'Singles', defaultPlayers: 2 },
      { label: 'Dobles',  value: 'Dobles',  defaultPlayers: 4 },
    ],
    courtTypes: ['Arcilla', 'Cemento', 'Hierba', 'Indoor'],
    hasLevel: true,
  },
  'Baloncesto': {
    emoji: '🏀',
    modalities: [
      { label: '3x3', value: '3x3', defaultPlayers: 6  },
      { label: '5v5', value: '5v5', defaultPlayers: 10 },
    ],
    courtTypes: ['Indoor', 'Outdoor'],
    hasLevel: true,
  },
  'Running': {
    emoji: '🏃',
    modalities: [
      { label: '5K',    value: '5K',    defaultPlayers: 20 },
      { label: '10K',   value: '10K',   defaultPlayers: 20 },
      { label: '21K',   value: '21K',   defaultPlayers: 15 },
      { label: 'Trail', value: 'Trail', defaultPlayers: 15 },
      { label: 'Libre', value: 'Libre', defaultPlayers: 20 },
    ],
    hasLevel: true,
  },
  'Yoga': {
    emoji: '🧘',
    modalities: [
      { label: 'Hatha',      value: 'Hatha',      defaultPlayers: 15 },
      { label: 'Vinyasa',    value: 'Vinyasa',    defaultPlayers: 15 },
      { label: 'Yin',        value: 'Yin',        defaultPlayers: 12 },
      { label: 'Meditación', value: 'Meditación', defaultPlayers: 12 },
    ],
    hasLevel: true,
  },
  'Crossfit': {
    emoji: '🏋️',
    modalities: [
      { label: 'WOD Grupal', value: 'WOD Grupal', defaultPlayers: 12 },
      { label: 'AMRAP',      value: 'AMRAP',      defaultPlayers: 10 },
      { label: 'Funcional',  value: 'Funcional',  defaultPlayers: 12 },
    ],
    hasLevel: true,
  },
  'Trekking': {
    emoji: '🏔️',
    modalities: [
      { label: 'Fácil',    value: 'Fácil',    defaultPlayers: 20 },
      { label: 'Moderado', value: 'Moderado', defaultPlayers: 15 },
      { label: 'Difícil',  value: 'Difícil',  defaultPlayers: 10 },
    ],
    hasLevel: false,
  },
  'Ciclismo': {
    emoji: '🚴',
    modalities: [
      { label: 'Ruta',   value: 'Ruta',   defaultPlayers: 15 },
      { label: 'MTB',    value: 'MTB',    defaultPlayers: 12 },
      { label: 'Urbano', value: 'Urbano', defaultPlayers: 20 },
    ],
    hasLevel: true,
  },
  'Natación': {
    emoji: '🏊',
    modalities: [
      { label: 'Pileta',         value: 'Pileta',         defaultPlayers: 10 },
      { label: 'Aguas abiertas', value: 'Aguas abiertas', defaultPlayers: 15 },
    ],
    hasLevel: true,
  },
};

/** Canonical sport names used throughout the app. */
export const SPORTS = [
  'Fútbol',
  'Running',
  'Yoga',
  'Padel',
  'Trekking',
  'Crossfit',
  'Baloncesto',
  'Ciclismo',
  'Natación',
  'Tenis',
] as const;

export type Sport = (typeof SPORTS)[number];

/** Filter options for the Match / Discover screen (includes emoji labels). */
export const MATCH_SPORT_FILTERS = [
  'Todos',
  '⚽ Fútbol',
  '🏃 Running',
  '🎾 Padel',
  '🧘 Yoga',
  '🏔️ Trekking',
] as const;

export type MatchSportFilter = (typeof MATCH_SPORT_FILTERS)[number];

/** Filter options for the Eventos page (plain names, no emoji). */
export const EVENT_SPORT_FILTERS = [
  'Todos',
  'Running',
  'Fútbol',
  'Yoga',
  'Padel',
  'Trekking',
  'Crossfit',
] as const;

export type EventSportFilter = (typeof EVENT_SPORT_FILTERS)[number];

/**
 * Extracts the plain sport name from a match filter label.
 * Example: '⚽ Fútbol' → 'Fútbol', 'Todos' → 'Todos'
 */
export function extractSportName(filter: string): string {
  return filter.replace(/^\S+\s/, '');
}
