import { buildSelector } from '@/shared/lib/store/buildSelector';

export const [useGetCounterValue, getCounterValue] = buildSelector((state) => state.counter.value)