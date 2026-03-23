/**
 * core/repositories/http/http-user.repository.ts
 *
 * HTTP implementation of UserRepository.
 * Replaces Firestore implementation.
 */

import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '@environments/environment';
import { UserRepository } from '../abstractions/user.repository';
import { Profile, UserStats, Achievement, WeeklyActivityDay, RecentActivityItem } from '../../models';

const GRADIENTS = [
  'from-orange-400 to-rose-400',
  'from-blue-400 to-indigo-400',
  'from-green-400 to-teal-400',
  'from-purple-400 to-pink-400',
  'from-yellow-400 to-orange-400',
];

const EMOJIS = ['🏃','🏋️','⚽','🎾','🏀','🏊','🚴','🤸'];

function mapProfile(raw: any, idx: number): Profile {
  return {
    id:            raw.id ?? '',
    name:          raw.displayName ?? raw.name ?? 'Usuario',
    age:           raw.age ?? 0,
    imageGradient: raw.imageGradient ?? GRADIENTS[idx % GRADIENTS.length],
    emoji:         raw.emoji ?? EMOJIS[idx % EMOJIS.length],
    sports:        raw.sports ?? [],
    level:         raw.level ?? 'Nivel 1',
    compatibility: raw.compatibility ?? 0,
    bio:           raw.bio ?? '',
    location:      raw.location ?? '',
  };
}

function mapStats(raw: any): UserStats {
  const xp = raw.totalScore ?? raw.xp ?? 0;
  return {
    xp,
    level:          Math.max(1, Math.floor(xp / 100) + 1),
    streak:         raw.streak ?? 0,
    matchesPlayed:  (raw.winCount ?? 0) + (raw.lossCount ?? 0) + (raw.drawCount ?? 0),
    eventsAttended: raw.eventCount ?? raw.eventsAttended ?? 0,
    rating:         raw.averageRating ?? raw.rating ?? 0,
  };
}

function mapAchievement(raw: any): Achievement {
  return {
    id:          raw.id ?? '',
    name:        raw.name ?? '',
    icon:        raw.icon ?? raw.badge ?? '🏅',
    description: raw.description ?? '',
    unlockedAt:  raw.unlockedAt ?? undefined,
    rarity:      (raw.rarity as Achievement['rarity']) ?? 'common',
  };
}

@Injectable()
export class HttpUserRepository extends UserRepository {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.apiUrl}/users`;

  getUserStats(): Observable<UserStats> {
    return this.http.get<any>(`${this.apiUrl}/stats`).pipe(map(mapStats));
  }

  getProfiles(): Observable<Profile[]> {
    return this.http.get<any[]>(`${this.apiUrl}/profiles`).pipe(
      map(list => list.map((p, i) => mapProfile(p, i))),
    );
  }

  getAchievements(): Observable<Achievement[]> {
    return this.http.get<any[]>(`${this.apiUrl}/achievements`).pipe(
      map(list => list.map(mapAchievement)),
    );
  }

  getWeeklyActivity(): Observable<WeeklyActivityDay[]> {
    return this.http.get<WeeklyActivityDay[]>(`${this.apiUrl}/weekly-activity`);
  }

  getRecentActivity(): Observable<RecentActivityItem[]> {
    return this.http.get<RecentActivityItem[]>(`${this.apiUrl}/recent-activity`);
  }
}
