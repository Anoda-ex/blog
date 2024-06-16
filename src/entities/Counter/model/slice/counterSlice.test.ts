import { CounterSchema } from 'entities/Counter';
import { counterReducer, counterActions } from './counterSlice';

describe('counter slice test', () => {
  test('increment', () => {
    const state:CounterSchema = {
      value: 22,
    };
    expect(counterReducer(state, counterActions.increment())).toEqual({ value: 23 });
  });
  test('decrement', () => {
    const state:CounterSchema = {
      value: 22,
    };
    expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 21 });
  });
  test('undefined', () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
  });
});
