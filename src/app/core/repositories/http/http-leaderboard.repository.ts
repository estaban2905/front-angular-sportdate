/**
 * core/repositories/http/http-leaderboard.repository.ts
 *
 * HTTP implementation of LeaderboardRepository.
 * Replaces Firestore implementation.
 */

import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '@environments/environment';
import { LeaderboardRepository } from '../abstractions/leaderboard.repository';
import { LeaderboardEntry, TeamEntry, Championship } from '../../models';

function mapLeaderboardEntry(raw: any, idx: number): LeaderboardEntry {
  const xp = raw.points ?? raw.totalScore ?? 0;
  return {
    rank:   raw.rank ?? idx + 1,
    id:     raw.userId ?? raw.id ?? '',
    name:   raw.displayName ?? raw.name ?? 'Usuario',
    avatar: raw.photoURL ?? raw.avatar ?? '',
    sport:  raw.sport ?? '',
    xp,
    level:  Math.max(1, Math.floor(xp / 100) + 1),
    trend:  (raw.trend as LeaderboardEntry['trend']) ?? 'same',
  };
}

function mapTeamEntry(raw: any): TeamEntry {
  return {
    id:      raw.id ?? '',
    name:    raw.name ?? '',
    sport:   raw.sport ?? '',
    wins:    raw.wins ?? raw.winCount ?? 0,
    losses:  raw.losses ?? raw.lossCount ?? 0,
    draws:   raw.draws ?? raw.drawCount ?? 0,
    points:  raw.points ?? 0,
    members: Array.isArray(raw.members) ? raw.members.length : (raw.members ?? 0),
    avatar:  raw.avatar ?? raw.imageGradient ?? 'from-blue-500 to-indigo-500',
  };
}

function mapChampionship(raw: any): Championship {
  const d = raw.startDate ? new Date(raw.startDate) : null;
  const months = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
  return {
    id:        raw.id ?? '',
    name:      raw.name ?? '',
    sport:     raw.sport ?? '',
    status:    raw.status ?? '',
    round:     raw.round ?? '',
    teams:     raw.teams ?? 0,
    startDate: d ? `${months[d.getMonth()]} ${d.getFullYear()}` : '',
    prize:     raw.prize ?? '',
    color:     raw.color ?? 'bg-blue-500',
  };
}

@Injectable()
export class HttpLeaderboardRepository extends LeaderboardRepository {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.apiUrl}/leaderboard`;

  getLeaderboard(): Observable<LeaderboardEntry[]> {
    return this.http.get<any[]>(`${this.apiUrl}`).pipe(
      map(list => list.map((entry, i) => mapLeaderboardEntry(entry, i))),
    );
  }

  getTeams(): Observable<TeamEntry[]> {
    return this.http.get<any[]>(`${this.apiUrl}/teams`).pipe(
      map(list => list.map(mapTeamEntry)),
    );
  }

  getChampionships(): Observable<Championship[]> {
    return this.http.get<any[]>(`${this.apiUrl}/championships`).pipe(
      map(list => list.map(mapChampionship)),
    );
  }

  getUserRank(): Observable<number> {
    return this.http.get<{ rank: number }>(`${this.apiUrl}/my-rank`).pipe(
      map(res => res.rank),
    );
  }
}
