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
  if (this.number > 0) {
    this._stoned = value - Math.trunc(Math.log2(this.number) * 5);
    console.log('дурман', value, this.stoned);
  } else {
    this._stoned = 10;
  }
}

get attack() {
  return this._attack;
}

set attack(value) {
  if (this.number > 0) {
    this._attack = value - Math.trunc((value * (((this.number - 1) * 10) / 100)));
    console.log('attack', value, this.attack);
  } else {
    this._attack = 10;
  }
}
}
