/**
 * core/utils/sport.utils.ts
 *
 * Shared sport utilities. Single source of truth for SPORT_EMOJI and
 * date formatting to avoid duplication across components.
 */

export const SPORT_EMOJI: Record<string, string> = {
  'Fútbol':     '⚽',
  'Running':    '🏃',
  'Yoga':       '🧘',
  'Padel':      '🏓',
  'Trekking':   '🏔️',
  'Crossfit':   '🏋️',
  'Baloncesto': '🏀',
  'Ciclismo':   '🚴',
  'Natación':   '🏊',
  'Tenis':      '🎾',
};

const DAYS   = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
const MONTHS = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

/** Converts an ISO date string (YYYY-MM-DD) to a human-readable label, e.g. "Sáb 15 Mar". */
export function formatDisplayDate(isoDate: string): string {
  const d = new Date(`${isoDate}T12:00:00`);
  return `${DAYS[d.getDay()]} ${d.getDate()} ${MONTHS[d.getMonth()]}`;
}

/** Returns today's date as an ISO string (YYYY-MM-DD) for use as a min-date attribute. */
export function todayISO(): string {
  return new Date().toISOString().slice(0, 10);
}
