import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleImageBlockComponent.module.scss';
import { memo } from 'react';
import { ArticleImageBlock } from '../../model/types/article';
import {
    Text as TextDeprecated,
    TextAlign,
    TextSize,
} from '@/shared/ui/deprecated/Text';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(
    (props: ArticleImageBlockComponentProps) => {
        const { className, block } = props;
        return (
            <div
                className={classNames(cls.articleImageBlockComponent, {}, [
                    className,
                ])}
            >
                <img className={cls.img} src={block.src} alt={block.title} />

                {block.title && (
                    <ToggleFeatures
                        feature={'isAppRedesigned'}
                        on={
                            <Text
                                text={block.title}
                                size={'m'}
                                align={'center'}
                            />
                        }
                        off={
                            <TextDeprecated
                                title={block.title}
                                size={TextSize.M}
                                align={TextAlign.CENTER}
                            />
                        }
                    />
                )}
            </div>
        );
    },
);

ArticleImageBlockComponent.displayName = 'ArticleImageBlockComponent';
