/**
 * event.model.ts
 *
 * Defines data shapes for sport events and weekly challenges shown
 * in the Eventos and Dashboard screens.
 */

/** A record of a user's attendance at an event. Stored in events/{id}/attendances/{userId}. */
export interface Attendance {
  /** UID of the attending user. */
  userId: string;
  /** Whether the user confirmed or cancelled attendance. */
  status: 'confirmed' | 'cancelled';
  /** ISO timestamp of when the user joined. */
  joinedAt: string;
  /** Display name of the attending user. */
  displayName?: string | null;
  /** Photo URL of the attending user. */
  photoURL?: string | null;
  /** Distance in km from the user's location to the event at the time of joining. */
  distanceKm?: number;
}

/** A scheduled sport event that users can join. */
export interface SportEvent {
  /** Unique identifier. */
  id: string;
  /** Title displayed on the event card, e.g. "Running Parque Bicentenario". */
  title: string;
  /** Canonical sport name, e.g. "Running", "Fútbol". Used for filtering. */
  sport: string;
  /** Emoji representing the sport, e.g. "🏃". Derived from sport on creation. */
  sportEmoji: string;
  /** Formatted date string for display, e.g. "Sáb 15 Mar". */
  date: string;
  /** ISO date string for sorting/querying, e.g. "2025-03-15". */
  dateISO: string;
  /** Formatted time string, e.g. "10:00". */
  time: string;
  /** Venue or district name. */
  location: string;
  /** Short description of the event. */
  description: string;
  /** Required skill level, e.g. "Principiante", "Intermedio", "Avanzado". */
  level?: string;
  /** Court/surface type for applicable sports, e.g. "Pasto Sintético". */
  courtType?: string;
  /** Sport modality/format, e.g. "Fútbol 5", "Singles", "Trail". */
  modality?: string;
  /** Number of people currently joined. */
  participants: number;
  /** Maximum capacity. */
  maxParticipants: number;
  /** Array of Tailwind background color classes for participant avatar circles. */
  avatars: string[];
  /** UID of the user who created the event. */
  createdBy: string;
  /** ISO timestamp of creation. */
  createdAt: string;
  /** Current event status. */
  status: 'open' | 'full' | 'cancelled';
  /** UIDs of users who have joined this event. */
  participantIds?: string[];
  /** Latitude of the event venue (stored to avoid geocoding on join). */
  lat?: number;
  /** Longitude of the event venue (stored to avoid geocoding on join). */
  lng?: number;
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
