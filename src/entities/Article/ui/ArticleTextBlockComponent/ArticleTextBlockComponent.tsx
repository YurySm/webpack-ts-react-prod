import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleTextBlockComponent.module.scss';
import { memo } from 'react';
import { ArticleTextBlock } from '../../model/types/article';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(
    (props: ArticleTextBlockComponentProps) => {
        const { className, block } = props;

        return (
            <div
                className={classNames(cls.ArticleTextBlockComponent, {}, [
                    className,
                ])}
            >
                {block.title && (
                    <ToggleFeatures
                        feature={'isAppRedesigned'}
                        on={<Text title={block.title} className={cls.title} />}
                        off={
                            <TextDeprecated
                                title={block.title}
                                className={cls.title}
                            />
                        }
                    />
                )}
                {block.paragraphs.map((p, index) => (
                    <ToggleFeatures
                        key={index}
                        feature={'isAppRedesigned'}
                        on={
                            <Text
                                key={index}
                                text={p}
                                className={cls.paragraph}
                            />
                        }
                        off={
                            <TextDeprecated
                                key={index}
                                text={p}
                                className={cls.paragraph}
                            />
                        }
                    />
                ))}
            </div>
        );
    },
);

ArticleTextBlockComponent.displayName = 'ArticleTextBlockComponent';
