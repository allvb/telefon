import Validator from '../js/telefon';

test('testing telefons', () => {
  let t = '8(926)154-12 50';
  expect(Validator.validateTelefon(t)).toBe('+79261541250');
  t = '+7(926)154-12 50';
  expect(Validator.validateTelefon(t)).toBe('+79261541250');
  t = '8 (926)154-12 50';
  expect(Validator.validateTelefon(t)).toBe('+79261541250');
  t = '+89 261 54-12 50';
  expect(Validator.validateTelefon(t)).toBe('+89261541250');
});
