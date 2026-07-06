import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Tabs.module.scss';
import { ReactNode, useCallback } from 'react';
import { Card } from '../Card';
import { Flex, FlexDirection } from '../Stack';

export interface TabItem {
    value: string;
    content: ReactNode;
}

interface TabsProps {
    className?: string;
    tabs: TabItem[];
    value: string;
    onTabClick: (tab: TabItem) => void;
    direction?: FlexDirection;
}

export const Tabs = (props: TabsProps) => {
    const { className, tabs, value, onTabClick, direction = 'row' } = props;

    const clickHandler = useCallback(
        (tab: TabItem) => {
            return () => {
                onTabClick(tab);
            };
        },
        [onTabClick],
    );

    return (
        <Flex
            className={classNames(cls.tabs, {}, [className])}
            direction={direction}
            gap={'8'}
            align={'start'}
        >
            {tabs.map((tab) => (
                <Card
                    variant={tab.value === value ? 'light' : 'normal'}
                    key={tab.value}
                    className={cls.tab}
                    onClick={clickHandler(tab)}
                    border={'round'}
                >
                    {tab.content}
                </Card>
            ))}
        </Flex>
    );
};
