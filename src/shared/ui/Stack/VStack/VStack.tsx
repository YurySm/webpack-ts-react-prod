import { Flex, FlexProps } from 'shared/ui/Stack/Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>

export const VStack = (props: VStackProps) => {
    const { align = 'start' } = props;
    return (
        <Flex
            align={ align }
            direction={ 'column' }
            { ...props }
        />
    );
};