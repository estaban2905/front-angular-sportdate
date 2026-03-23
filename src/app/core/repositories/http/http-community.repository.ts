/**
 * core/repositories/http/http-community.repository.ts
 *
 * HTTP implementation of CommunityRepository.
 * Replaces Firestore implementation.
 */

import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '@environments/environment';
import { CommunityRepository } from '../abstractions/community.repository';
import { Group, Community } from '../../models';

@Injectable()
export class HttpCommunityRepository extends CommunityRepository {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.apiUrl}/communities`;

  getGroups(): Observable<Group[]> {
    return this.http.get<Group[]>(`${this.apiUrl}/groups`).pipe(
      catchError(() => of([])),
    );
  }

  getCommunities(): Observable<Community[]> {
    return this.http.get<Community[]>(`${this.apiUrl}`).pipe(
      catchError(() => of([])),
    );
  }
}
