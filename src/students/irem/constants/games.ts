import {ImageSourcePropType} from 'react-native';

export type GameItem = {
  id: string;
  name: string;
  image: ImageSourcePropType;
};

export const FREQUENT_GAMES: GameItem[] = [
  {id: 'pubg', name: 'PUBG', image: require('../assets/pubg.png')},
  {id: 'valorant', name: 'Valorant', image: require('../assets/valorant.png')},
  {id: 'csgo', name: 'CS-GO', image: require('../assets/csgo.png')},
];

export const ALL_GAMES: GameItem[] = [
  {id: 'brawlstars', name: 'Brawl Stars', image: require('../assets/brawlstars.png')},
  {id: 'clashRoyale', name: 'Clash Royale', image: require('../assets/crashroyale.png')},
  {id: 'roblox', name: 'Roblox', image: require('../assets/roblox.png')},
  {id: 'h1z1', name: 'H1Z1', image: require('../assets/h1z1.png')},
  {id: 'lol', name: 'League of Legends', image: require('../assets/lol.png')},
  {id: 'pubgMobile', name: 'PUBG Mobile', image: require('../assets/pubg.png')},
  {id: 'valorant2', name: 'Valorant', image: require('../assets/valorant.png')},
  {id: 'csgo2', name: 'CS-GO 2', image: require('../assets/csgo.png')},
];

export function getGameById(id: string): GameItem | undefined {
  return [...FREQUENT_GAMES, ...ALL_GAMES].find(game => game.id === id);
}
