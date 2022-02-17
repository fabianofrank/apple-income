import data, { FETCH_DATA } from '../redux/data/data';

describe('Reducer', () => {
  test('Should return initial state', () => {
    expect(data(undefined, {})).toEqual({
      data: [],
    });
  });

  test('Should handle FETCH_DATA', () => {
    const action = {
      type: FETCH_DATA,
      payload: [{ name: 'mock' }],
    };
    expect(data({ data: [] }, action)).toEqual({
      data: [{ name: 'mock' }],
    });
  });
});
