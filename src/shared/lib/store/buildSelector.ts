// CircularDependencyPlugin
import { useAppSelector } from '../../../app/providers/StoreProvider/config/hooks';
import { StateSchema } from '../../../app/providers/StoreProvider/config/StateSchema';

type Selector<T> = (state: StateSchema) => T
type Result<T> = [() => T, Selector<T>]

export function buildSelector<T>(selector: Selector<T>): Result<T> {
    const useAppSelectorHook = () => {
        return useAppSelector(selector)
    }

    return [useAppSelectorHook, selector];
}