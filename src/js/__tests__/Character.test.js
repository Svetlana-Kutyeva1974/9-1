import Character from '../Character.js';
import Magician from '../Magician.js';

test('string length name error', () => {
  const result2 = new Character('hero', 'Magician');
  expect(result2.name).toMatch(/hero/);
});

test('app string length name error', () => {
  const result = new Character('hero', 'Magician');
  expect(result.type).toMatch(/Magician/);
});

test('app string length name error', () => {
  expect(() => {
    const p = new Character('heroismerror', 'Magician');
    console.log(p.name);
  }).toThrow(/Ошибка, имя должно содержать не менее 2 и не более 10 символов/);
});

test('app type error ', () => {
  expect(() => {
    const result3 = new Character('hero5', 'Magiciancheck');
    console.log(result3.type);
  }).toThrow(/Ошибка, недопустимый тип элемента/);
});

test('Проверка значений stoned', () => {
  const result1 = new Magician('hero', 'Magician');
  expect(result1.stoned).toBe(0);
});

test('Проверка attack', () => {
  const result1 = new Magician('hero', 'Magician');
  expect(result1.attack).toBe(9);
});

test('Проверка attack', () => {
  const result1 = new Character('hero', 'Magician');
  result1.attack = 5;
  expect(result1.attack).toBe(NaN);
});
