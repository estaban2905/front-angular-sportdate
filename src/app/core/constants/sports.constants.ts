/**
 * core/constants/sports.constants.ts
 *
 * Centralized sport names and filter options used across multiple pages
 * (Match, Eventos, Grupos, etc.). Single source of truth — avoid duplicating
 * sport lists in individual components.
 */

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
