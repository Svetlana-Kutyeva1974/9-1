import Character from './Character.js';

export default class Magician extends Character {
  constructor(...args) {
    super(...args);
    this.distance = 2;
    this.stoned = 0;
    this.attack = 10;
    this.defence = 40;
  }
}
