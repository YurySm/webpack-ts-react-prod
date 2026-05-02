import { StateSchema } from '@/app/providers/StoreProvider';
import { buildSelector } from '@/shared/lib/store/buildSelector';
import { JsonSettings } from '../types/jsonSettings';

// export const getJsonSettings = (state: StateSchema) =>
//     state.user.authData?.jsonSettings;

const defaultJsonSettings: JsonSettings = {};

export const [useGetJsonSettings, getJsonSettings] = buildSelector(
    (state: StateSchema) =>
        state.user?.authData?.jsonSettings || defaultJsonSettings,
);

// export const [useGetJsonSettingsByKey, getJsonSettingsByKey] = buildSelector(
//     (state: StateSchema, key: keyof JsonSettings) =>
//         state.user?.authData?.jsonSettings?.[key],
// );
