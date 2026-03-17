/**
 * core/use-cases/match/filter-profiles.use-case.ts
 *
 * Encapsulates the business rule for filtering athlete profiles by sport.
 * Keeps this logic out of components and states — a single place to update
 * if the matching criteria changes (e.g., adding skill-level filtering).
 *
 * SRP: only responsible for filtering logic.
 * Pure service — no side effects, no state mutations.
 */

import { Injectable } from '@angular/core';
import { Profile } from '@core/models';
import { extractSportName } from '@core/constants/sports.constants';

@Injectable({ providedIn: 'root' })
export class FilterProfilesUseCase {
  /**
   * Returns profiles that match the given sport filter label.
   *
   * @param profiles - Full list of profiles from the store.
   * @param filter   - A MATCH_SPORT_FILTERS value, e.g. '⚽ Fútbol' or 'Todos'.
   */
  execute(profiles: Profile[], filter: string): Profile[] {
    if (filter === 'Todos') return profiles;

    const sportName = extractSportName(filter).toLowerCase();
    return profiles.filter(p =>
      p.sports.some(s => s.name.toLowerCase() === sportName),
    );
  }
}
