
import { Button } from 'shared/ui/Button/Button';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider/config/hooks';

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

            <Button data-testid="decrement-btn" onClick={ decrement }>
                -
            </Button>

            <Button data-testid="increment-btn" onClick={ increment }>
                +
            </Button>
        </div>
    );
};
