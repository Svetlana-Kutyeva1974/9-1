export default class Character {
static TYPES = {
  Bowman: [25, 25],
  Swordsman: [40, 10],
  Magician: [10, 40],
  Daemon: [10, 40],
  Undead: [25, 25],
  Zombie: [40, 10],
}

constructor(name, type) {
  if (name.length > 10 || name.length < 2) {
    throw new Error('Ошибка, имя должно содержать не менее 2 и не более 10 символов');
  }
  if (!Object.keys(Character.TYPES).includes(type)) {
    throw new Error('Ошибка, недопустимый тип элемента');
  }
  this.name = name;
  this.type = type;
  this.health = 100;
  this.level = 1;
}

get stoned() {
  return this._stoned;
}

set stoned(value) {
  this._stoned = value;
}

get attack() {
  return this._attack;
}

set attack(value) {
  this._attack = value - Math.round((value * 0.1 * (this.distance - 1)));
  if (this.stoned) {
    this._attack -= Math.log2(this.distance) * 5;
  }
  return this._attack >= 0 ? Math.round(this._attack) : 0;
}
}
