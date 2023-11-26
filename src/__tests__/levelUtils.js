import getLevel from '../levelUtils';
import fetchData from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test.each([
  [1, 5, 'Ваш текущий уровень: 5'],
  [2, 4, 'Ваш текущий уровень: 4'],
])('test get level for userId %i, level %i', (userId, level, expected) => {
  fetchData.mockReturnValue({ status: 'ok', level });
  expect(getLevel(userId)).toBe(expected);
});
