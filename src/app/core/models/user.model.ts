/**
 * user.model.ts
 *
 * Defines the data shapes for user-related entities:
 * - Profile: a discoverable athlete card shown in the match/discover screen
 * - UserStats: aggregated statistics for the currently logged-in user
 * - Achievement: a badge/medal earned by the user through activity
 */

/** A sport tag displayed on a profile card. */
export interface SportTag {
  /** Display name of the sport, e.g. "Running" */
  name: string;
  /** Tailwind CSS classes for background and text color, e.g. "bg-coral-100 text-coral-600" */
  color: string;
}

/** A discoverable athlete profile shown in the match/discover flow. */
export interface Profile {
  /** Unique identifier for this profile. */
  id: string;
  /** Display name of the athlete. */
  name: string;
  /** Age in years. */
  age: number;
  /** Tailwind gradient classes for the profile card background, e.g. "from-orange-400 to-rose-400". */
  imageGradient: string;
  /** Emoji character used as the profile avatar illustration. */
  emoji: string;
  /** List of sports the athlete plays. */
  sports: SportTag[];
  /** Human-readable level string, e.g. "Nivel 12". */
  level: string;
  /** Compatibility percentage with the current user (0–100). */
  compatibility: number;
  /** Short bio written by the athlete. */
  bio: string;
  /** Neighbourhood or district, e.g. "Providencia". */
  location: string;
}

/** Aggregated statistics for the currently logged-in user. */
export interface UserStats {
  /** Total experience points accumulated. */
  xp: number;
  /** Current level number. */
  level: number;
  /** Number of consecutive active days. */
  streak: number;
  /** Total sport matches/games played. */
  matchesPlayed: number;
  /** Total community events attended. */
  eventsAttended: number;
  /** Average peer rating (0–5). */
  rating: number;
}

/** An achievement badge earned through in-app activity. */
export interface Achievement {
  /** Unique identifier. */
  id: string;
  /** Short display name shown beneath the badge. */
  name: string;
  /** Emoji icon rendered inside the badge circle. */
  icon: string;
  /** Longer description shown in the tooltip. */
  description: string;
  /** ISO date string of when this was earned; absent when still locked. */
  unlockedAt?: string;
  /** Rarity tier that controls the badge border/shadow styling. */
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}
