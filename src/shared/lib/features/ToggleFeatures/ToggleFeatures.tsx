import { FeatureFlags } from '@/shared/types/featureFlags';
import { ReactElement } from 'react';
import { getFeatureFlag } from '../setGetFeatures';

interface ToggleFeaturesProps {
    feature: keyof FeatureFlags;
    on: ReactElement;
    off: ReactElement;
}
export const ToggleFeatures = (props: ToggleFeaturesProps) => {
    const { feature, off, on } = props;

    if (getFeatureFlag(feature)) {
        return on;
    }

    return off;
};
