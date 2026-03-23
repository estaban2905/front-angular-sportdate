/**
 * pages/configuracion/configuracion.constants.ts
 *
 * Metadata for every Firestore collection managed by the admin panel.
 */

export interface ManagedCollection {
  name: string;
  label: string;
  emoji: string;
  /** Whether this collection has mock data that can be restored. */
  restorable: boolean;
}

export const MANAGED_COLLECTIONS: ManagedCollection[] = [
  { name: 'events',        label: 'Eventos',        emoji: '📅', restorable: true  },
  { name: 'challenges',    label: 'Desafíos',       emoji: '🏆', restorable: true  },
  { name: 'profiles',      label: 'Perfiles',       emoji: '👤', restorable: true  },
  { name: 'achievements',  label: 'Logros',         emoji: '🎖️', restorable: true  },
  { name: 'groups',        label: 'Grupos',         emoji: '👥', restorable: true  },
  { name: 'communities',   label: 'Comunidades',    emoji: '🌍', restorable: true  },
  { name: 'leaderboard',   label: 'Ranking',        emoji: '🥇', restorable: true  },
  { name: 'teams',         label: 'Equipos',        emoji: '⚔️', restorable: true  },
  { name: 'championships', label: 'Campeonatos',    emoji: '🏅', restorable: true  },
  { name: 'user_stats',    label: 'Stats usuario',  emoji: '📊', restorable: true  },
  { name: 'retos',         label: 'Retos',          emoji: '⚔️', restorable: true  },
  { name: 'resultados',    label: 'Resultados',     emoji: '🏆', restorable: true  },
  { name: 'calificaciones',label: 'Calificaciones', emoji: '⭐', restorable: true  },
  { name: 'conversations', label: 'Conversaciones', emoji: '💬', restorable: false },
  { name: 'messages',      label: 'Mensajes',       emoji: '✉️', restorable: false },
];
