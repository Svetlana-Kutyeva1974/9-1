import Character from './Character.js';

export default class Daemon extends Character {
  constructor(...args) {
    super(...args);
    this.distance = 3;
    this.stoned = 10;
    this.attack = 10;
    this.defence = 40;
  }
}
