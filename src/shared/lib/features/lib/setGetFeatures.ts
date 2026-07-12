import { FeatureFlags } from '@/shared/types/featureFlags';
import { LOCAL_STORAGE_LAST_DESIGN_KEY } from '@/shared/constants/localstorage';

const defaultFeatureFlags: FeatureFlags = {
    isAppRedesigned:
        localStorage.getItem(LOCAL_STORAGE_LAST_DESIGN_KEY) === 'new',
};

let featureFlags: FeatureFlags = {
    ...defaultFeatureFlags,
};

export function setFeaturesFlags(newFeaturesFlags?: FeatureFlags) {
    if (newFeaturesFlags) {
        featureFlags = newFeaturesFlags;
    }
}

export function getFeatureFlag(flag: keyof FeatureFlags) {
    return featureFlags[flag];
}

export function getAllFeatureFlags() {
    return featureFlags;
}
