/**
 * core/repositories/abstractions/event.repository.ts
 *
 * Abstract base class for the Event repository.
 * Provides Observable-based methods for fetching sport events and challenges.
 */

import { Observable } from 'rxjs';
import { SportEvent, Challenge } from '../../models';

export abstract class EventRepository {
  /**
   * Returns all upcoming sport events available to the user.
   */
  abstract getEvents(): Observable<SportEvent[]>;

  /**
   * Returns the current user's active challenges.
   */
  abstract getChallenges(): Observable<Challenge[]>;
}
