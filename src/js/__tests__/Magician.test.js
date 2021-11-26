import Magician from '../Magician.js';
import Character from '../Character.js';

test('string length name error', () => {
  const result = new Magician('hero', 'Magician');
  expect(result.attack).toBe(9);
});

test('string length name error', () => {
  const result0 = new Magician('hero', 'Magician');
  expect(result0.defence).toBe(40);
});

test('string length name error', () => {
  const result1 = new Magician('hero2', 'Magician');
  const result2 = new Character('hero2', 'Magician');
  expect(result1).toMatchObject(result2);
});

test('Проверка значений stoned', () => {
  const result1 = new Magician('hero', 'Magician');
  // eslint no-underscore-dangle: "error"
  expect(result1.stoned).toBe(0);
});
