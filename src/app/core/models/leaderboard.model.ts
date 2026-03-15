/**
 * leaderboard.model.ts
 *
 * Data shapes for the ranking / leaderboard screen entities.
 */

/** Trend direction indicating movement since the last ranking update. */
export type Trend = 'up' | 'down' | 'same';

/** A single row in the global leaderboard table. */
export interface LeaderboardEntry {
  /** Numeric rank position (1 = first place). */
  rank: number;
  /** Unique user identifier; the special value "me" refers to the current user. */
  id: string;
  /** Display name. */
  name: string;
  /** URL to the user's avatar image. */
  avatar: string;
  /** Primary sport the user competes in, e.g. "Running". */
  sport: string;
  /** Total experience points. */
  xp: number;
  /** Current level. */
  level: number;
  /** Whether the user moved up, down, or stayed the same since last update. */
  trend: Trend;
}

/** A team entry shown in the Equipos tab of the leaderboard. */
export interface TeamEntry {
  /** Unique identifier. */
  id: string;
  /** Team display name. */
  name: string;
  /** Sport label with emoji, e.g. "⚽ Fútbol". */
  sport: string;
  /** Number of wins. */
  wins: number;
  /** Number of losses. */
  losses: number;
  /** Number of draws. */
  draws: number;
  /** Total points in the ranking. */
  points: number;
  /** Number of team members. */
  members: number;
  /** Tailwind gradient classes for the team avatar, e.g. "from-red-500 to-orange-500". */
  avatar: string;
}

/** A championship tournament shown in the Campeonatos tab. */
export interface Championship {
  /** Unique identifier. */
  id: string;
  /** Full championship name. */
  name: string;
  /** Emoji for the sport. */
  sport: string;
  /** Current status label, e.g. "En curso", "Inscripciones", "Finalizado". */
  status: string;
  /** Current round description, e.g. "Semifinal". */
  round: string;
  /** Number of participating teams. */
  teams: number;
  /** Human-readable start date, e.g. "Mar 2024". */
  startDate: string;
  /** Prize description, e.g. "500 XP + Trofeo". */
  prize: string;
  /** Tailwind background color class for the left accent strip. */
  color: string;
}
