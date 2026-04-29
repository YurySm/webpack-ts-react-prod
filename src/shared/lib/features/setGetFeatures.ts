import { FeatureFlags } from '@/shared/types/featureFlags';

let featureFlags: FeatureFlags;

export function setFeaturesFlags(newFeaturesFlags?: FeatureFlags) {
    if (newFeaturesFlags) {
        featureFlags = newFeaturesFlags;
    }
}

export function getFeatureFlag(flag: keyof FeatureFlags) {
    return featureFlags[flag];
}
