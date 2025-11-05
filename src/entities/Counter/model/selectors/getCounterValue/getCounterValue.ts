import { buildSelector } from '@/shared/lib/store/buildSelector';

// export const getCounterValue = createSelector(
//     getCounter,
//     (counter: CounterSchema) => counter.value,
// );

export const [useGetCounterValue, getCounterValue] = buildSelector((state) => state.counter.value)