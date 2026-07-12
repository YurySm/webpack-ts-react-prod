import { ReactElement } from 'react';

import { FeatureFlags } from '@/shared/types/featureFlags';
import { setFeaturesFlags } from '@/shared/lib/features';

export function FeaturesFlagsDecorator(features: FeatureFlags) {
    return (
        // eslint-disable-next-line react/display-name
        (Story: () => ReactElement) => {
            setFeaturesFlags(features);

            return <Story />;
        }
    );
}
