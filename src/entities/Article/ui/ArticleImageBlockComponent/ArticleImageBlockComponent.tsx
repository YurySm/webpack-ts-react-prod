import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleImageBlockComponent.module.scss';
import { memo } from 'react';
import { ArticleImageBlock } from 'entities/Article/model/types/article';
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text';

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
    const {
        className,
        block
    } = props;
    return (
        <div className={ classNames(cls.articleImageBlockComponent, {}, [className]) }>
            <img
                className={ cls.img }
                src={ block.src }
                alt={ block.title }/>

            {
                block.title &&
                <Text
                    title={ block.title }
                    size={ TextSize.M }
                    align={ TextAlign.CENTER }/>
            }
        </div>
    );
})

ArticleImageBlockComponent.displayName = 'ArticleImageBlockComponent';