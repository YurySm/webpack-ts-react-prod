// import { useSelector } from 'react-redux';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';
import { Button } from 'shared/ui/Button/Button';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider/config/store';

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
				data-testid="decrement-btn"
				onClick={ decrement }
			>
				-
			</Button> 

			<Button
				data-testid="increment-btn"
				onClick={ increment }
			>
				+
			</Button>
		</div>
	);
};
