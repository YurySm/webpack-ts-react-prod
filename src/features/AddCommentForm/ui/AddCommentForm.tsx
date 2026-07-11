import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AddCommentForm.module.scss';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { useTranslation } from 'react-i18next';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    addCommentFormActions,
    addCommentFormReducer,
} from '../model/slices/addCommenFormSlice';
import { memo, useCallback } from 'react';
import {
    // getAddCommentFormError,
    getAddCommentFormText,
} from '../model/selectors/addCommentFormSelectors';
import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider';
import { ToggleFeatures } from '@/shared/lib/features';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Input } from '@/shared/ui/redesigned/Input';
import { Icon } from '@/shared/ui/redesigned/Icon';
import SearchIcon from '@/shared/assets/icons/search.svg';
import { Card } from '@/shared/ui/redesigned/Card';
import { Button } from '@/shared/ui/redesigned/Button';

const reducers: ReducersList = {
    addCommentFrom: addCommentFormReducer,
};

interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const AddCommentForm = (props: AddCommentFormProps) => {
    const { className, onSendComment } = props;
    const { t } = useTranslation('Articles');

    const dispatch = useAppDispatch();

    const text = useAppSelector(getAddCommentFormText);
    // const error = useAppSelector(getAddCommentFormError)

    const onCommentTextChange = useCallback(
        (value: string) => {
            dispatch(addCommentFormActions.setText(value));
        },
        [dispatch],
    );

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [onSendComment, onCommentTextChange, text]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={
                    <Card
                        padding={'24'}
                        border={'partial'}
                        className={classNames(
                            cls.addCommentFormRedesigned,
                            {},
                            [className],
                        )}
                    >
                        <HStack gap={'16'} data-testid={'AddCommentForm'}>
                            <Input
                                data-testid={'AddCommentForm.Input'}
                                className={cls.input}
                                value={text}
                                onChange={onCommentTextChange}
                                placeholder={t('Введите текст комментария')}
                                addonLeft={<Icon Svg={SearchIcon} />}
                            />

                            <Button
                                variant={'outline'}
                                onClick={onSendHandler}
                                data-testid={'AddCommentForm.Button'}
                            >
                                {t('отправить')}
                            </Button>
                        </HStack>
                    </Card>
                }
                off={
                    <div
                        className={classNames(cls.addCommentFormProps, {}, [
                            className,
                        ])}
                        data-testid={'AddCommentForm'}
                    >
                        <InputDeprecated
                            data-testid={'AddCommentForm.Input'}
                            className={cls.input}
                            value={text}
                            onChange={onCommentTextChange}
                            placeholder={t('Введите текст комментария')}
                        />

                        <ButtonDeprecated
                            theme={ButtonTheme.OUTLINE}
                            onClick={onSendHandler}
                            data-testid={'AddCommentForm.Button'}
                        >
                            {t('отправить')}
                        </ButtonDeprecated>
                    </div>
                }
            />
        </DynamicModuleLoader>
    );
};

export default memo(AddCommentForm);
