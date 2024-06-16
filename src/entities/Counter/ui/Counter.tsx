import Button from 'shared/ui/Button/Button';
import { getCounterValue } from 'entities/Counter/model/selectors/getCounterValue/getCounterValue';
import { useAppDispatch, useAppSelector } from 'shared/lib/reduxHooks/reduxHooks';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
  const dispatch = useAppDispatch();
  const counterValue = useAppSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid="value-title">{counterValue}</h1>
      <Button
        onClick={increment}
        data-testid="increment-btn"
      >
        increment
      </Button>
      <Button
        data-testid="decrement-btn"
        onClick={decrement}
      >
        decrement
      </Button>
    </div>
  );
};
