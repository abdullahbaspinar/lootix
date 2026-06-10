export type Badge = {
  id: string;
  emoji: string;
  unlocked: boolean;
};

export const BADGES: Badge[] = [
  {id: '1', emoji: '🏆', unlocked: true},
  {id: '2', emoji: '⭐', unlocked: true},
  {id: '3', emoji: '🎯', unlocked: true},
  {id: '4', emoji: '🔥', unlocked: true},
  {id: '5', emoji: '💎', unlocked: true},
  {id: '6', emoji: '🎮', unlocked: true},
  {id: '7', emoji: '🛡️', unlocked: true},
  {id: '8', emoji: '⚡', unlocked: true},
  {id: '9', emoji: '🌟', unlocked: false},
  {id: '10', emoji: '👑', unlocked: false},
  {id: '11', emoji: '🎖️', unlocked: false},
  {id: '12', emoji: '🏅', unlocked: false},
];

export type LeaderboardUser = {
  id: string;
  name: string;
  points: number;
  rank: number;
  initials: string;
  isCurrentUser?: boolean;
};

export const LEADERBOARD: LeaderboardUser[] = [
  {id: '1', name: 'Ahmet K.', points: 5200, rank: 1, initials: 'AK'},
  {id: '2', name: 'Zeynep Y.', points: 4950, rank: 2, initials: 'ZY'},
  {id: '3', name: 'Mehmet D.', points: 4800, rank: 3, initials: 'MD'},
  {id: '4', name: 'Elif S.', points: 4650, rank: 4, initials: 'ES'},
  {id: '5', name: 'Can T.', points: 4500, rank: 5, initials: 'CT'},
  {id: '6', name: 'Abdullah B.', points: 4200, rank: 12, initials: 'AB', isCurrentUser: true},
];
