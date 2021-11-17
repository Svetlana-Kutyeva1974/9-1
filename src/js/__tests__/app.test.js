import Character from '../Character.js';
import Daemon from '../Daemon.js';
import Magician from '../Magician.js';

test('test error toThrow', () => {
  expect(() => {
    const p1 = new Magician('hero', 'Magician');
  }).toThrow(/Персонаж уже входит в команду/);
});

test('test успешное добавление', () => {
  const p = new Character('hero', 'Magician');
  const p0 = new Daemon('hero1', 'Daemon');
});

test('test преобразование в массив', () => {
  const p1 = new Character('hero', 'Magician');
  const p2 = new Character('hero1', 'Bowman');
  /*
  expect(team.toArray()).toStrictEqual([...team.members]);
  */
});
