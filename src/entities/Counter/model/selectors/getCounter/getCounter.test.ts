import { RootState } from 'app/providers/StoreProvider';
import { getCounter } from './getCounter';

describe('get counter', () => {
  test('get counter', () => {
    const state:DeepPartial<RootState> = {
      counter: {
        value: 22,
      },
    };
    expect(getCounter(state as RootState)).toEqual({
      value: 22,
    });
  });
});
