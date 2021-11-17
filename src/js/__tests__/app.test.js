import Character from '../Character.js';
import Daemon from '../Daemon.js';
import Magician from '../Magician.js';

test('test error toThrow', () => {
  expect(() => {
  }).toThrow(/Персонаж уже входит в команду/);
});

test('test преобразование в массив', () => {
  /*
  expect(team.toArray()).toStrictEqual([...team.members]);
  */
});
