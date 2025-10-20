import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore } from './config/store';
import type {
    StateSchema,
    ReduxStoreWithManager,
    ThunkConfig,
    StateSchemaKeys
} from './config/StateSchema';

export {
    StoreProvider,
    createReduxStore,
};

export type {
    StateSchema,
    ReduxStoreWithManager,
    ThunkConfig,
    StateSchemaKeys
};

export {
    useAppDispatch,
    useAppSelector
} from './config/hooks'
