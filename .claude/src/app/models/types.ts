export interface Profile {
  id: string;
  name: string;
  age: number;
  imageGradient: string;
  emoji: string;
  sports: { name: string; color: string }[];
  level: string;
  compatibility: number;
  bio: string;
  location: string;
}

export interface Group {
  id: string;
  name: string;
  sportEmoji: string;
  members: number;
  activityLevel: 'Muy activo 🔥' | 'Activo ⚡' | 'Nuevo 🌱';
  imageGradient: string;
}

export interface Event {
  id: string;
  title: string;
  sportEmoji: string;
  date: string;
  time: string;
  location: string;
  participants: number;
  maxParticipants: number;
  avatars: string[];
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  sportEmoji: string;
  xpReward: number;
  progress: number;
  total: number;
  deadline: string;
  difficulty: 1 | 2 | 3;
}

export interface Achievement {
  id: string;
  name: string;
  icon: string;
  description: string;
  unlockedAt?: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

export interface UserStats {
  xp: number;
  level: number;
  streak: number;
  matchesPlayed: number;
  eventsAttended: number;
  rating: number;
}

export interface LeaderboardEntry {
  rank: number;
  id: string;
  name: string;
  avatar: string;
  sport: string;
  xp: number;
  level: number;
  trend: 'up' | 'down' | 'same';
}
