// CircularDependencyPlugin
import { useAppSelector } from '../../../app/providers/StoreProvider/config/hooks';
import { StateSchema } from '../../../app/providers/StoreProvider/config/StateSchema';

type Selector<T, Args extends any[]> = (state: StateSchema, ...args: Args) => T;
type Hook<T, Args extends any[]> = (...args: Args) => T;
type Result<T, Args extends any[]> = [Hook<T, Args>, Selector<T, Args>];

export function buildSelector<T, Args extends any[]>(
    selector: Selector<T, Args>,
): Result<T, Args> {
    const useAppSelectorHook: Hook<T, Args> = (...args: Args) => {
        return useAppSelector((state: StateSchema) => selector(state, ...args));
    };

    return [useAppSelectorHook, selector];
}
