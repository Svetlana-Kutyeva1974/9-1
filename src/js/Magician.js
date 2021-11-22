import Character from './Character.js';

export default class Magician extends Character {
  constructor(...args) {
    super(...args);
    this.number = 0;
    this.stoned = 10;
    this.attack = 10;
    this.defence = 40;
  }
}
