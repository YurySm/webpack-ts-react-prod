import { counterReducer, counterActions } from './model/slice/counterSlice';
import { Counter } from './ui/Counter';
import type { CounterSchema } from './model/types/counterSchema';

export { Counter, CounterSchema, counterReducer, counterActions };
