import { Flex, FlexProps } from '@/shared/ui/deprecated/Stack/Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>;

/**
 * Устарел, использовать из папки redesigned
 * @deprecated
 */

export const HStack = (props: HStackProps) => {
    return <Flex direction={'row'} {...props} />;
};
