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
  Attendance,
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
    bio: 'Me encanta correr por la Costanera del Limarí los fines de semana. Busco partner para motivarnos!',
    location: 'Centro, Ovalle',
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
    bio: 'Juego padel 3 veces por semana en el club del centro. Buscando cuarto jugador para los martes en la noche.',
    location: 'Población Las Lomas, Ovalle',
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
    bio: 'Recién empezando con yoga, busco grupo amigable para clases los sábados en la plaza.',
    location: 'Población Los Olmos, Ovalle',
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
    title: 'Running Costanera del Limarí',
    sport: 'Running',
    sportEmoji: '🏃',
    date: 'Sáb 22 Mar',
    dateISO: '2025-03-22',
    time: '08:00',
    location: 'Costanera del Limarí, Ovalle',
    lat: -30.5985,
    lng: -71.2040,
    description: 'Salida grupal de 8 km por la costanera del río Limarí. Ritmo moderado (~6 min/km). Nos juntamos en el acceso principal. Lleva agua y zapatillas de running.',
    level: 'Intermedio',
    participants: 4,
    maxParticipants: 15,
    avatars: ['bg-red-400', 'bg-blue-400', 'bg-green-400', 'bg-orange-400'],
    participantIds: ['u1', 'u3', 'u6', 'u7'],
    createdBy: 'u1',
    createdAt: '2025-03-15T09:00:00.000Z',
    status: 'open',
  },
  {
    id: 'e2',
    title: 'Padel Dobles — Falta 1',
    sport: 'Padel',
    sportEmoji: '🎾',
    date: 'Dom 23 Mar',
    dateISO: '2025-03-23',
    time: '18:30',
    location: 'Club Deportivo Ovalle, Centro',
    lat: -30.6008,
    lng: -71.1980,
    description: 'Partido amistoso 2v2 en cancha cubierta. Ya tenemos 3 jugadores, buscamos el cuarto. Nivel intermedio, buen ambiente.',
    level: 'Intermedio',
    courtType: 'Indoor',
    participants: 3,
    maxParticipants: 4,
    avatars: ['bg-yellow-400', 'bg-purple-400', 'bg-blue-400'],
    participantIds: ['u2', 'u5', 'u4'],
    createdBy: 'u2',
    createdAt: '2025-03-16T14:00:00.000Z',
    status: 'open',
  },
  {
    id: 'e3',
    title: 'Yoga al Atardecer',
    sport: 'Yoga',
    sportEmoji: '🧘',
    date: 'Mar 25 Mar',
    dateISO: '2025-03-25',
    time: '19:00',
    location: 'Plaza de Armas, Ovalle',
    lat: -30.6010,
    lng: -71.1973,
    description: 'Sesión de yoga al aire libre en la Plaza de Armas con vista al atardecer. Apto para todos los niveles. Trae tu esterilla y ropa cómoda. La sesión dura 1 hora.',
    level: 'Principiante',
    participants: 4,
    maxParticipants: 20,
    avatars: ['bg-pink-400', 'bg-indigo-400', 'bg-teal-400', 'bg-orange-400'],
    participantIds: ['u3', 'u6', 'u7', 'u5'],
    createdBy: 'u3',
    createdAt: '2025-03-17T10:00:00.000Z',
    status: 'open',
  },
  {
    id: 'e4',
    title: 'Fútbol 5 Mixto',
    sport: 'Fútbol',
    sportEmoji: '⚽',
    date: 'Jue 27 Mar',
    dateISO: '2025-03-27',
    time: '20:00',
    location: 'Estadio Municipal El Teniente, Ovalle',
    lat: -30.5977,
    lng: -71.2003,
    description: 'Partido de fútbol 5 mixto en pasto sintético. Todos los niveles bienvenidos. Se juegan 2 tiempos de 25 min. Pecheras incluidas.',
    level: 'Principiante',
    courtType: 'Pasto Sintético',
    participants: 4,
    maxParticipants: 10,
    avatars: ['bg-cyan-400', 'bg-lime-400', 'bg-red-400', 'bg-yellow-400'],
    participantIds: ['u2', 'u4', 'u1', 'u7'],
    createdBy: 'u2',
    createdAt: '2025-03-18T18:00:00.000Z',
    status: 'open',
  },
  {
    id: 'e5',
    title: 'Trekking Cerro La Cruz',
    sport: 'Trekking',
    sportEmoji: '🏔️',
    date: 'Sáb 29 Mar',
    dateISO: '2025-03-29',
    time: '07:30',
    location: 'Sendero Cerro La Cruz, Ovalle',
    lat: -30.6095,
    lng: -71.1890,
    description: 'Subida al Cerro La Cruz con vista panorámica de Ovalle. Duración aprox. 2,5 h ida y vuelta. Llevar mínimo 1,5L de agua, snacks y protector solar.',
    level: 'Intermedio',
    participants: 3,
    maxParticipants: 12,
    avatars: ['bg-green-400', 'bg-yellow-400', 'bg-teal-400'],
    participantIds: ['u1', 'u6', 'u3'],
    createdBy: 'u1',
    createdAt: '2025-03-19T08:00:00.000Z',
    status: 'open',
  },
  {
    id: 'e6',
    title: 'Crossfit Open Box Session',
    sport: 'Crossfit',
    sportEmoji: '🏋️',
    date: 'Lun 24 Mar',
    dateISO: '2025-03-24',
    time: '07:00',
    location: 'Gimnasio Municipal, Centro Ovalle',
    lat: -30.6020,
    lng: -71.1960,
    description: 'Sesión matutina de crossfit para todos los niveles. WOD del día + calentamiento guiado. Los primeros 10 en anotarse tienen acceso al box completo.',
    level: 'Principiante',
    participants: 3,
    maxParticipants: 10,
    avatars: ['bg-red-400', 'bg-orange-400', 'bg-yellow-400'],
    participantIds: ['u4', 'u2', 'u7'],
    createdBy: 'u4',
    createdAt: '2025-03-19T11:00:00.000Z',
    status: 'open',
  },
  {
    id: 'e7',
    title: 'Ciclismo Ruta Ovalle–El Romero',
    sport: 'Ciclismo',
    sportEmoji: '🚴',
    date: 'Dom 30 Mar',
    dateISO: '2025-03-30',
    time: '09:00',
    location: 'Población Las Lomas, Ovalle',
    lat: -30.5940,
    lng: -71.2080,
    description: 'Rodada grupal de 30 km hacia El Romero y de regreso. Ritmo tranquilo, apto para ciclistas recreativos. Bici de ruta o MTB. Llevá cámara de repuesto y herramientas básicas.',
    level: 'Principiante',
    participants: 4,
    maxParticipants: 20,
    avatars: ['bg-blue-400', 'bg-cyan-400', 'bg-teal-400', 'bg-indigo-400'],
    participantIds: ['u3', 'u5', 'u6', 'u7'],
    createdBy: 'u3',
    createdAt: '2025-03-20T15:00:00.000Z',
    status: 'open',
  },
  {
    id: 'e8',
    title: 'Tenis Singles — Nivel Avanzado',
    sport: 'Tenis',
    sportEmoji: '🎾',
    date: 'Vie 28 Mar',
    dateISO: '2025-03-28',
    time: '17:00',
    location: 'Club de Tenis Ovalle, Población Los Olmos',
    lat: -30.6055,
    lng: -71.1935,
    description: 'Partidos de singles por sets. Buscamos jugadores nivel 4.0+. Cancha de arcilla. Traer raqueta propia. Coordinamos parejas al llegar.',
    level: 'Avanzado',
    courtType: 'Arcilla',
    participants: 2,
    maxParticipants: 8,
    avatars: ['bg-purple-400', 'bg-pink-400'],
    participantIds: ['u5', 'u1'],
    createdBy: 'u5',
    createdAt: '2025-03-21T09:00:00.000Z',
    status: 'open',
  },
];

// ---------------------------------------------------------------------------
// Attendances (pre-seeded per event)
// ---------------------------------------------------------------------------

export const MOCK_ATTENDANCES: Record<string, Attendance[]> = {
  e1: [
    { userId: 'u1', status: 'confirmed', joinedAt: '2025-03-15T10:00:00.000Z', displayName: 'Sofía M.', photoURL: null, distanceKm: 2.3 },
    { userId: 'u3', status: 'confirmed', joinedAt: '2025-03-15T11:30:00.000Z', displayName: 'Ana P.', photoURL: null, distanceKm: 4.7 },
    { userId: 'u6', status: 'confirmed', joinedAt: '2025-03-15T12:00:00.000Z', displayName: 'Pedro S.', photoURL: null, distanceKm: 6.1 },
    { userId: 'u7', status: 'confirmed', joinedAt: '2025-03-15T14:00:00.000Z', displayName: 'María J.', photoURL: null, distanceKm: 3.5 },
  ],
  e2: [
    { userId: 'u2', status: 'confirmed', joinedAt: '2025-03-16T14:30:00.000Z', displayName: 'Javier R.', photoURL: null, distanceKm: 1.8 },
    { userId: 'u5', status: 'confirmed', joinedAt: '2025-03-16T15:00:00.000Z', displayName: 'Lucía F.', photoURL: null, distanceKm: 3.2 },
    { userId: 'u4', status: 'confirmed', joinedAt: '2025-03-16T16:00:00.000Z', displayName: 'Carlos D.', photoURL: null, distanceKm: 5.4 },
  ],
  e3: [
    { userId: 'u3', status: 'confirmed', joinedAt: '2025-03-17T10:00:00.000Z', displayName: 'Ana P.', photoURL: null, distanceKm: 1.2 },
    { userId: 'u6', status: 'confirmed', joinedAt: '2025-03-17T11:00:00.000Z', displayName: 'Pedro S.', photoURL: null, distanceKm: 2.8 },
    { userId: 'u7', status: 'confirmed', joinedAt: '2025-03-17T12:00:00.000Z', displayName: 'María J.', photoURL: null, distanceKm: 0.9 },
    { userId: 'u5', status: 'confirmed', joinedAt: '2025-03-17T13:00:00.000Z', displayName: 'Lucía F.', photoURL: null, distanceKm: 4.3 },
  ],
  e4: [
    { userId: 'u2', status: 'confirmed', joinedAt: '2025-03-18T18:00:00.000Z', displayName: 'Javier R.', photoURL: null, distanceKm: 3.2 },
    { userId: 'u4', status: 'confirmed', joinedAt: '2025-03-18T19:00:00.000Z', displayName: 'Carlos D.', photoURL: null, distanceKm: 6.8 },
    { userId: 'u1', status: 'confirmed', joinedAt: '2025-03-18T20:00:00.000Z', displayName: 'Sofía M.', photoURL: null, distanceKm: 7.5 },
    { userId: 'u7', status: 'confirmed', joinedAt: '2025-03-18T21:00:00.000Z', displayName: 'María J.', photoURL: null, distanceKm: 2.1 },
  ],
  e5: [
    { userId: 'u1', status: 'confirmed', joinedAt: '2025-03-19T08:00:00.000Z', displayName: 'Sofía M.', photoURL: null, distanceKm: 5.6 },
    { userId: 'u6', status: 'confirmed', joinedAt: '2025-03-19T09:00:00.000Z', displayName: 'Pedro S.', photoURL: null, distanceKm: 8.2 },
    { userId: 'u3', status: 'confirmed', joinedAt: '2025-03-19T10:00:00.000Z', displayName: 'Ana P.', photoURL: null, distanceKm: 9.4 },
  ],
  e6: [
    { userId: 'u4', status: 'confirmed', joinedAt: '2025-03-19T11:00:00.000Z', displayName: 'Carlos D.', photoURL: null, distanceKm: 4.1 },
    { userId: 'u2', status: 'confirmed', joinedAt: '2025-03-19T12:00:00.000Z', displayName: 'Javier R.', photoURL: null, distanceKm: 5.7 },
    { userId: 'u7', status: 'confirmed', joinedAt: '2025-03-19T13:00:00.000Z', displayName: 'María J.', photoURL: null, distanceKm: 2.9 },
  ],
  e7: [
    { userId: 'u3', status: 'confirmed', joinedAt: '2025-03-20T15:00:00.000Z', displayName: 'Ana P.', photoURL: null, distanceKm: 11.3 },
    { userId: 'u5', status: 'confirmed', joinedAt: '2025-03-20T16:00:00.000Z', displayName: 'Lucía F.', photoURL: null, distanceKm: 8.6 },
    { userId: 'u6', status: 'confirmed', joinedAt: '2025-03-20T17:00:00.000Z', displayName: 'Pedro S.', photoURL: null, distanceKm: 13.2 },
    { userId: 'u7', status: 'confirmed', joinedAt: '2025-03-20T18:00:00.000Z', displayName: 'María J.', photoURL: null, distanceKm: 10.4 },
  ],
  e8: [
    { userId: 'u5', status: 'confirmed', joinedAt: '2025-03-21T09:00:00.000Z', displayName: 'Lucía F.', photoURL: null, distanceKm: 1.5 },
    { userId: 'u1', status: 'confirmed', joinedAt: '2025-03-21T10:00:00.000Z', displayName: 'Sofía M.', photoURL: null, distanceKm: 3.8 },
  ],
};

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
    name: 'Runners Ovalle',
    sportEmoji: '🏃',
    members: 142,
    activityLevel: 'Muy activo 🔥',
    imageGradient: 'from-orange-100 to-orange-200',
  },
  {
    id: 'g2',
    name: 'Fútbol 5 Centro',
    sportEmoji: '⚽',
    members: 48,
    activityLevel: 'Activo ⚡',
    imageGradient: 'from-teal-100 to-teal-200',
  },
  {
    id: 'g3',
    name: 'Yoga Ovalle',
    sportEmoji: '🧘',
    members: 85,
    activityLevel: 'Muy activo 🔥',
    imageGradient: 'from-purple-100 to-purple-200',
  },
  {
    id: 'g4',
    name: 'Trekking Limarí',
    sportEmoji: '🏔️',
    members: 320,
    activityLevel: 'Nuevo 🌱',
    imageGradient: 'from-green-100 to-green-200',
  },
];

export const MOCK_COMMUNITIES: Community[] = [
  { id: 'c1', name: 'Runners Ovalle', emoji: '🏃', gradient: 'from-orange-400 to-rose-400', members: 142, events: 3, messages: 12, tags: ['Running', 'Ovalle Centro'], level: 'Muy activo 🔥' },
  { id: 'c2', name: 'Fútbol 5 Centro', emoji: '⚽', gradient: 'from-teal-400 to-emerald-400', members: 48, events: 2, messages: 8, tags: ['Fútbol', 'Las Lomas'], level: 'Activo ⚡' },
  { id: 'c3', name: 'Yoga Ovalle', emoji: '🧘', gradient: 'from-purple-400 to-pink-400', members: 85, events: 5, messages: 24, tags: ['Yoga', 'Los Olmos'], level: 'Muy activo 🔥' },
  { id: 'c4', name: 'Trekking Limarí', emoji: '🏔️', gradient: 'from-green-400 to-teal-400', members: 320, events: 1, messages: 5, tags: ['Trekking', 'Ovalle'], level: 'Activo ⚡' },
  { id: 'c5', name: 'Padel Ovalle', emoji: '🎾', gradient: 'from-blue-400 to-cyan-400', members: 67, events: 4, messages: 18, tags: ['Padel', 'Ovalle Centro'], level: 'Muy activo 🔥' },
  { id: 'c6', name: 'CrossFit Ovalle', emoji: '🏋️', gradient: 'from-red-400 to-orange-400', members: 93, events: 6, messages: 31, tags: ['CrossFit', 'Población Los Olmos'], level: 'Muy activo 🔥' },
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
  { id: 'ch1', name: 'Liga Fútbol 5 Ovalle', sport: '⚽', status: 'En curso', round: 'Semifinal', teams: 8, startDate: 'Mar 2024', prize: '500 XP + Trofeo', color: 'bg-emerald-500' },
  { id: 'ch2', name: 'Torneo Padel Primavera Ovalle', sport: '🎾', status: 'Inscripciones', round: 'Fase de grupos', teams: 16, startDate: 'Abr 2024', prize: '1000 XP + Medalla', color: 'bg-blue-500' },
  { id: 'ch3', name: 'Maratón Running Ovalle', sport: '🏃', status: 'Finalizado', round: 'Final', teams: 32, startDate: 'Feb 2024', prize: '800 XP', color: 'bg-orange-500' },
];
