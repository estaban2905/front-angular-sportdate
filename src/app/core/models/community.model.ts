/**
 * community.model.ts
 *
 * Data shapes for community groups (Comunidades) and match-screen group cards.
 */

/** Activity level label used on Group cards. */
export type ActivityLevel = 'Muy activo 🔥' | 'Activo ⚡' | 'Nuevo 🌱';

/**
 * A sport group card shown in the match screen's horizontal scroll
 * and the comunidades screen.
 */
export interface Group {
  /** Unique identifier. */
  id: string;
  /** Display name of the group. */
  name: string;
  /** Emoji representing the group's primary sport. */
  sportEmoji: string;
  /** Number of members currently in the group. */
  members: number;
  /** Human-readable activity level with emoji suffix. */
  activityLevel: ActivityLevel;
  /** Tailwind gradient classes for the group card header, e.g. "from-orange-100 to-orange-200". */
  imageGradient: string;
}

/**
 * A full community entity shown in the Comunidades (grupos) page grid,
 * with richer metadata than Group.
 */
export interface Community {
  /** Unique identifier. */
  id: string;
  /** Display name. */
  name: string;
  /** Primary emoji for the community. */
  emoji: string;
  /** Tailwind gradient classes for the community card header. */
  gradient: string;
  /** Number of members. */
  members: number;
  /** Number of upcoming events. */
  events: number;
  /** Number of unread/recent messages. */
  messages: number;
  /** Short tag labels shown as pills on the card, e.g. ["Running", "Vitacura"]. */
  tags: string[];
  /** Human-readable activity/level descriptor. */
  level: string;
}
