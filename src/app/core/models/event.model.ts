/**
 * event.model.ts
 *
 * Defines data shapes for sport events and weekly challenges shown
 * in the Eventos and Dashboard screens.
 */

/** A scheduled sport event that users can join. */
export interface SportEvent {
  /** Unique identifier. */
  id: string;
  /** Title displayed on the event card, e.g. "Running Parque Bicentenario". */
  title: string;
  /** Emoji representing the sport, e.g. "🏃". */
  sportEmoji: string;
  /** Formatted date string, e.g. "Sáb 15 Mar". */
  date: string;
  /** Formatted time string, e.g. "10:00". */
  time: string;
  /** Venue or district name. */
  location: string;
  /** Number of people currently joined. */
  participants: number;
  /** Maximum capacity. */
  maxParticipants: number;
  /** Array of Tailwind background color classes for participant avatar circles. */
  avatars: string[];
}

/** A time-limited challenge the user can complete for XP rewards. */
export interface Challenge {
  /** Unique identifier. */
  id: string;
  /** Short title shown in the challenge list. */
  title: string;
  /** Longer description explaining what to do. */
  description: string;
  /** Emoji for the related sport. */
  sportEmoji: string;
  /** XP points awarded on completion. */
  xpReward: number;
  /** Current progress value, e.g. 7.5 (km run). */
  progress: number;
  /** Target value to reach for completion. */
  total: number;
  /** Human-readable deadline, e.g. "2 días". */
  deadline: string;
  /** Difficulty tier: 1 = easy, 2 = medium, 3 = hard. */
  difficulty: 1 | 2 | 3;
}
