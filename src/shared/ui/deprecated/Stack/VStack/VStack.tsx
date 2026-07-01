import { Flex, FlexProps } from '@/shared/ui/deprecated/Stack/Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>;

/**
 * Устарел, использовать из папки redesigned
 * @deprecated
 */

export const VStack = (props: VStackProps) => {
    const { align = 'start' } = props;
    return <Flex align={align} direction={'column'} {...props} />;
};
