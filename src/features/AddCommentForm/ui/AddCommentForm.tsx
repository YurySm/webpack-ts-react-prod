import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AddCommentForm.module.scss';
import { Input } from '@/shared/ui/Input';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { addCommentFormActions, addCommentFormReducer } from '../model/slices/addCommenFormSlice';
import { memo, useCallback } from 'react';
import {
    // getAddCommentFormError,
    getAddCommentFormText,
} from '../model/selectors/addCommentFormSelectors';
import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider';


const reducers: ReducersList = {
    addCommentFrom: addCommentFormReducer
}

interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const AddCommentForm = (props: AddCommentFormProps) => {
    const {
        className,
        onSendComment
    } = props;
    const { t } = useTranslation('Articles');

    const dispatch = useAppDispatch();

    const text = useAppSelector(getAddCommentFormText)
    // const error = useAppSelector(getAddCommentFormError)

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch])

    const onSendHandler = useCallback(() => {
        onSendComment(text || '')
        onCommentTextChange('')
    }, [onSendComment, onCommentTextChange, text])

    return (
        <DynamicModuleLoader reducers={ reducers }>
            <div className={ classNames(cls.addCommentFormProps, {}, [className]) }>
                <Input
                    className={ cls.input }
                    value={ text }
                    onChange={ onCommentTextChange }
                    placeholder={ t('Введите текст комментария') } />

                <Button
                    theme={ ButtonTheme.OUTLINE }
                    onClick={ onSendHandler }
                >
                    {t('отправить')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(AddCommentForm)