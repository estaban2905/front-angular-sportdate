/**
 * core/repositories/in-memory/mock-data.ts
 *
 * Single source of truth for all mock/seed data used by in-memory repositories.
 * When a real backend is connected, this file (and the in-memory repositories
 * that reference it) can be deleted without touching the rest of the app.
 */

import {
  Profile,
  Group,
  SportEvent,
  Challenge,
  Achievement,
  UserStats,
  LeaderboardEntry,
  Community,
  TeamEntry,
  Championship,
} from '../../models';

// ---------------------------------------------------------------------------
// User / Profile
// ---------------------------------------------------------------------------

export const MOCK_PROFILES: Profile[] = [
  {
    id: '1',
    name: 'Camila',
    age: 27,
    imageGradient: 'from-orange-400 to-rose-400',
    emoji: '🏃‍♀️',
    sports: [
      { name: 'Running', color: 'bg-coral-100 text-coral-600' },
      { name: 'Yoga', color: 'bg-purple-100 text-purple-600' },
      { name: 'Trekking', color: 'bg-green-100 text-green-600' },
    ],
    level: 'Nivel 12',
    compatibility: 87,
    bio: 'Me encanta correr por el parque Bicentenario los fines de semana. Busco partner para motivarnos!',
    location: 'Providencia',
  },
  {
    id: '2',
    name: 'Diego',
    age: 29,
    imageGradient: 'from-blue-400 to-cyan-400',
    emoji: '🎾',
    sports: [
      { name: 'Padel', color: 'bg-blue-100 text-blue-600' },
      { name: 'Fútbol', color: 'bg-teal-100 text-teal-600' },
    ],
    level: 'Nivel 15',
    compatibility: 92,
    bio: 'Juego padel 3 veces por semana. Buscando cuarto jugador para los martes en la noche.',
    location: 'Las Condes',
  },
  {
    id: '3',
    name: 'Valentina',
    age: 25,
    imageGradient: 'from-pink-400 to-purple-400',
    emoji: '🧘‍♀️',
    sports: [
      { name: 'Yoga', color: 'bg-purple-100 text-purple-600' },
      { name: 'Pilates', color: 'bg-pink-100 text-pink-600' },
      { name: 'Dance', color: 'bg-yellow-100 text-yellow-600' },
    ],
    level: 'Nivel 8',
    compatibility: 75,
    bio: 'Recién empezando con yoga, busco grupo amigable para clases los sábados.',
    location: 'Ñuñoa',
  },
];

export const MOCK_USER_STATS: UserStats = {
  xp: 2450,
  level: 12,
  streak: 5,
  matchesPlayed: 23,
  eventsAttended: 8,
  rating: 4.7,
};

export const MOCK_ACHIEVEMENTS: Achievement[] = [
  {
    id: 'a1',
    name: 'Primera Carrera',
    icon: '🏁',
    description: 'Completaste tu primer evento de running.',
    unlockedAt: '2023-10-15',
    rarity: 'common',
  },
  {
    id: 'a2',
    name: 'Social Butterfly',
    icon: '🦋',
    description: 'Asististe a 5 eventos sociales.',
    unlockedAt: '2023-11-02',
    rarity: 'rare',
  },
  {
    id: 'a3',
    name: 'Racha de 7 días',
    icon: '🔥',
    description: 'Mantuviste tu racha de actividad por una semana.',
    unlockedAt: '2023-11-10',
    rarity: 'epic',
  },
  {
    id: 'a4',
    name: 'MVP del Partido',
    icon: '🏆',
    description: 'Fuiste votado como el mejor jugador del partido.',
    rarity: 'legendary',
  },
  {
    id: 'a5',
    name: 'Match Perfecto',
    icon: '💘',
    description: 'Conseguiste un match con 100% de compatibilidad.',
    rarity: 'epic',
  },
  {
    id: 'a6',
    name: 'Madrugador',
    icon: '🌅',
    description: 'Asististe a 3 eventos antes de las 8 AM.',
    rarity: 'rare',
  },
];

// ---------------------------------------------------------------------------
// Events & Challenges
// ---------------------------------------------------------------------------

export const MOCK_EVENTS: SportEvent[] = [
  {
    id: 'e1',
    title: 'Running Parque Bicentenario',
    sportEmoji: '🏃',
    date: 'Sáb 15 Mar',
    time: '10:00',
    location: 'Vitacura',
    participants: 8,
    maxParticipants: 12,
    avatars: ['bg-red-400', 'bg-blue-400', 'bg-green-400'],
  },
  {
    id: 'e2',
    title: 'Padel vs Equipo Rojo',
    sportEmoji: '🎾',
    date: 'Dom 16 Mar',
    time: '18:30',
    location: 'Club Padel Oriente',
    participants: 3,
    maxParticipants: 4,
    avatars: ['bg-yellow-400', 'bg-purple-400'],
  },
  {
    id: 'e3',
    title: 'Yoga al Atardecer',
    sportEmoji: '🧘',
    date: 'Mar 18 Mar',
    time: '19:00',
    location: 'Parque Inés de Suárez',
    participants: 15,
    maxParticipants: 20,
    avatars: ['bg-pink-400', 'bg-indigo-400', 'bg-teal-400', 'bg-orange-400'],
  },
  {
    id: 'e4',
    title: 'Fútbol Mixto',
    sportEmoji: '⚽',
    date: 'Jue 20 Mar',
    time: '20:00',
    location: 'Cancha Los Leones',
    participants: 8,
    maxParticipants: 10,
    avatars: ['bg-cyan-400', 'bg-lime-400'],
  },
];

export const MOCK_CHALLENGES: Challenge[] = [
  {
    id: 'c1',
    title: 'Corre 10km esta semana',
    description: 'Acumula 10km en tus actividades de running.',
    sportEmoji: '🏃',
    xpReward: 500,
    progress: 7.5,
    total: 10,
    deadline: '2 días',
    difficulty: 2,
  },
  {
    id: 'c2',
    title: 'Asiste a 3 eventos',
    description: 'Participa en eventos grupales para conocer gente.',
    sportEmoji: '📅',
    xpReward: 300,
    progress: 1,
    total: 3,
    deadline: '5 días',
    difficulty: 1,
  },
  {
    id: 'c3',
    title: 'Haz 5 matches nuevos',
    description: 'Conecta con nuevos deportistas.',
    sportEmoji: '🤝',
    xpReward: 200,
    progress: 3,
    total: 5,
    deadline: '1 día',
    difficulty: 1,
  },
  {
    id: 'c4',
    title: 'Primer partido de fútbol',
    description: 'Completa un partido de fútbol 5.',
    sportEmoji: '⚽',
    xpReward: 800,
    progress: 0,
    total: 1,
    deadline: '6 días',
    difficulty: 3,
  },
];

// ---------------------------------------------------------------------------
// Communities / Groups
// ---------------------------------------------------------------------------

export const MOCK_GROUPS: Group[] = [
  {
    id: 'g1',
    name: 'Runners Santiago',
    sportEmoji: '🏃',
    members: 142,
    activityLevel: 'Muy activo 🔥',
    imageGradient: 'from-orange-100 to-orange-200',
  },
  {
    id: 'g2',
    name: 'Fútbol 5 Provi',
    sportEmoji: '⚽',
    members: 48,
    activityLevel: 'Activo ⚡',
    imageGradient: 'from-teal-100 to-teal-200',
  },
  {
    id: 'g3',
    name: 'Yoga Ñuñoa',
    sportEmoji: '🧘',
    members: 85,
    activityLevel: 'Muy activo 🔥',
    imageGradient: 'from-purple-100 to-purple-200',
  },
  {
    id: 'g4',
    name: 'Trekking Chile',
    sportEmoji: '🏔️',
    members: 320,
    activityLevel: 'Nuevo 🌱',
    imageGradient: 'from-green-100 to-green-200',
  },
];

export const MOCK_COMMUNITIES: Community[] = [
  { id: 'c1', name: 'Runners Santiago', emoji: '🏃', gradient: 'from-orange-400 to-rose-400', members: 142, events: 3, messages: 12, tags: ['Running', 'Vitacura'], level: 'Muy activo 🔥' },
  { id: 'c2', name: 'Fútbol 5 Provi', emoji: '⚽', gradient: 'from-teal-400 to-emerald-400', members: 48, events: 2, messages: 8, tags: ['Fútbol', 'Providencia'], level: 'Activo ⚡' },
  { id: 'c3', name: 'Yoga Ñuñoa', emoji: '🧘', gradient: 'from-purple-400 to-pink-400', members: 85, events: 5, messages: 24, tags: ['Yoga', 'Ñuñoa'], level: 'Muy activo 🔥' },
  { id: 'c4', name: 'Trekking Chile', emoji: '🏔️', gradient: 'from-green-400 to-teal-400', members: 320, events: 1, messages: 5, tags: ['Trekking', 'Nacional'], level: 'Activo ⚡' },
  { id: 'c5', name: 'Padel Masters', emoji: '🎾', gradient: 'from-blue-400 to-cyan-400', members: 67, events: 4, messages: 18, tags: ['Padel', 'Las Condes'], level: 'Muy activo 🔥' },
  { id: 'c6', name: 'CrossFit Warriors', emoji: '🏋️', gradient: 'from-red-400 to-orange-400', members: 93, events: 6, messages: 31, tags: ['CrossFit', 'Santiago Centro'], level: 'Muy activo 🔥' },
];

// ---------------------------------------------------------------------------
// Leaderboard
// ---------------------------------------------------------------------------

export const MOCK_LEADERBOARD: LeaderboardEntry[] = [
  { rank: 1, id: 'u1', name: 'Sofía M.', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sofia', sport: 'Running', xp: 15400, level: 42, trend: 'same' },
  { rank: 2, id: 'u2', name: 'Javier R.', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Javier', sport: 'Fútbol', xp: 14200, level: 38, trend: 'up' },
  { rank: 3, id: 'u3', name: 'Ana P.', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ana', sport: 'Padel', xp: 13800, level: 36, trend: 'down' },
  { rank: 4, id: 'u4', name: 'Carlos D.', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos', sport: 'Crossfit', xp: 12500, level: 32, trend: 'up' },
  { rank: 5, id: 'me', name: 'Tú', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix', sport: 'Multideporte', xp: 2450, level: 12, trend: 'up' },
  { rank: 6, id: 'u5', name: 'Lucía F.', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lucia', sport: 'Yoga', xp: 2100, level: 10, trend: 'down' },
  { rank: 7, id: 'u6', name: 'Pedro S.', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Pedro', sport: 'Trekking', xp: 1800, level: 9, trend: 'same' },
  { rank: 8, id: 'u7', name: 'María J.', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maria', sport: 'Natación', xp: 1500, level: 8, trend: 'up' },
];

export const MOCK_TEAMS: TeamEntry[] = [
  { id: 't1', name: 'Los Halcones', sport: '⚽ Fútbol', wins: 12, losses: 3, draws: 2, points: 38, members: 11, avatar: 'from-red-500 to-orange-500' },
  { id: 't2', name: 'Padel Kings', sport: '🎾 Padel', wins: 8, losses: 2, draws: 0, points: 24, members: 4, avatar: 'from-blue-500 to-cyan-500' },
  { id: 't3', name: 'Sprint Club', sport: '🏃 Running', wins: 15, losses: 5, draws: 0, points: 45, members: 8, avatar: 'from-green-500 to-teal-500' },
  { id: 't4', name: 'Yoga Flow', sport: '🧘 Yoga', wins: 10, losses: 1, draws: 0, points: 30, members: 6, avatar: 'from-purple-500 to-pink-500' },
];

export const MOCK_CHAMPIONSHIPS: Championship[] = [
  { id: 'ch1', name: 'Liga Fútbol 5 Santiago', sport: '⚽', status: 'En curso', round: 'Semifinal', teams: 8, startDate: 'Mar 2024', prize: '500 XP + Trofeo', color: 'bg-emerald-500' },
  { id: 'ch2', name: 'Torneo Padel Primavera', sport: '🎾', status: 'Inscripciones', round: 'Fase de grupos', teams: 16, startDate: 'Abr 2024', prize: '1000 XP + Medalla', color: 'bg-blue-500' },
  { id: 'ch3', name: 'Maratón Running Challenge', sport: '🏃', status: 'Finalizado', round: 'Final', teams: 32, startDate: 'Feb 2024', prize: '800 XP', color: 'bg-orange-500' },
];
