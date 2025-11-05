import { Button } from '@/shared/ui/Button';
import { useCounterActions } from '../model/slice/counterSlice';
// CircularDependencyPlugin
 
import { useGetCounterValue } from '../model/selectors/getCounterValue/getCounterValue';


export const Counter = () => {
    const counterValue = useGetCounterValue();

    const { increment, decrement } = useCounterActions();

    const handleIncrement = () => {
        increment();
    };
    const handleDecrement = () => {
        decrement();
    };
    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>

            <Button data-testid="decrement-btn" onClick={ handleDecrement }>
                -
            </Button>

            <Button data-testid="increment-btn" onClick={ handleIncrement }>
                +
            </Button>
        </div>
    );
};
