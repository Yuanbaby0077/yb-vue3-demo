import { is } from '../src/index'

const list = [
  {
    type: Object,
    value: {}
  },
  {
    type: Object,
    value: null,
    expected: false
  }
]
test.each(list)('is', ({ type, value, expected }) => {
  expect(is(type, value)).toBe(expected ?? true);
});