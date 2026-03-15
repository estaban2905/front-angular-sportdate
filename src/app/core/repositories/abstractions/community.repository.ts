/**
 * core/repositories/abstractions/community.repository.ts
 *
 * Abstract base class for the Community repository.
 * Provides Observable-based access to groups and communities.
 */

import { Observable } from 'rxjs';
import { Group, Community } from '../../models';

export abstract class CommunityRepository {
  /**
   * Returns the compact group list used in the match screen's horizontal scroll.
   */
  abstract getGroups(): Observable<Group[]>;

  /**
   * Returns the full community list used in the Grupos/Comunidades page.
   */
  abstract getCommunities(): Observable<Community[]>;
}
