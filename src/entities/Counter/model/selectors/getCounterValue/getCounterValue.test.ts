import { DeepPartial } from '@reduxjs/toolkit';
import { RootState } from 'app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('get counter value', () => {
  test('get counter value', () => {
    const state:DeepPartial<RootState> = {
      counter: {
        value: 22,
      },
    };
    expect(getCounterValue(state as RootState)).toEqual(22);
  });
});
