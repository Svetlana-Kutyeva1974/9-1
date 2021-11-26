import Character from '../Character.js';
import Magician from '../Magician.js';

test('обьекты ', () => {
  const result1 = new Magician('hero2', 'Magician');
  const result2 = new Character('hero2', 'Magician');
  expect(result1).toMatchObject(result2);
});
