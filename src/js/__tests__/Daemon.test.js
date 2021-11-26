import Daemon from '../Daemon.js';

test('Проверка гетера  attack', () => {
  const result = new Daemon('hero', 'Daemon');
  expect(result.attack).toBe(0.07518749639421962);
});

test('string length name error', () => {
  const result0 = new Daemon('hero', 'Daemon');
  expect(result0.defence).toBe(40);
});

test('Проверка гетера stoned', () => {
  const result1 = new Daemon('hero', 'Daemon');
  expect(result1.stoned).toBe(10);
});
