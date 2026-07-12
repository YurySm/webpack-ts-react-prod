import {
    getAllFeatureFlags,
    setFeaturesFlags,
} from '@/shared/lib/features/lib/setGetFeatures';
import { ReactElement } from 'react';

export const NewDesignDecorator = () => {
    return (
        // eslint-disable-next-line react/display-name
        (Story: () => ReactElement) => {
            setFeaturesFlags({
                ...getAllFeatureFlags(),
                isAppRedesigned: true,
            });
            return (
                <div className="app_redesigned">
                    <Story />
                </div>
            );
        }
    );
};
