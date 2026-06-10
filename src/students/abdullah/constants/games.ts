import {ImageSourcePropType} from 'react-native';

export type Game = {
  id: string;
  name: string;
  image: ImageSourcePropType;
};

export const GAMES: Game[] = [
  {id: 'pubg', name: 'PUBG Mobile', image: require('../assets/game/pubg.png')},
  {id: 'valorant', name: 'Valorant', image: require('../assets/game/valorant.png')},
  {id: 'lol', name: 'League of Legends', image: require('../assets/game/lol.png')},
  {id: 'clashRoyale', name: 'Clash Royale', image: require('../assets/game/clashRoyale.png')},
  {id: 'brawlstars', name: 'Brawl Stars', image: require('../assets/game/brawlstars.png')},
  {id: 'csgo', name: 'CS:GO', image: require('../assets/game/csgo.png')},
  {id: 'roblox', name: 'Roblox', image: require('../assets/game/roblox.png')},
  {id: 'h1z1', name: 'H1Z1', image: require('../assets/game/h1z1.png')},
  {id: 'wildRift', name: 'Wild Rift', image: require('../assets/game/wildRift.png')},
  {id: 'eFootbal', name: 'eFootball', image: require('../assets/game/eFootbal.png')},
  {id: '2kmobile', name: 'NBA 2K Mobile', image: require('../assets/game/2kmobile.png')},
  {id: 'clashOfClans', name: 'Clash of Clans', image: require('../assets/game/clashOfClans.png')},
  {id: 'minecraft', name: 'Minecraft', image: require('../assets/game/minecraft.png')},
  {id: 'ets2', name: 'Euro Truck Simulator 2', image: require('../assets/game/ets2.png')},
  {id: 'age_of', name: 'Age of Empires', image: require('../assets/game/age_of.png')},
];

export function getGameById(id: string): Game | undefined {
  return GAMES.find(game => game.id === id);
}
