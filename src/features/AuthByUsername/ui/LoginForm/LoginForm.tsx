import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Input as InputDepoprecated } from '@/shared/ui/deprecated/Input';
import cls from './LoginForm.module.scss';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import { useCallback } from 'react';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { Text as TextDeprecated, TextTheme } from '@/shared/ui/deprecated/Text';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider';
import { ToggleFeatures } from '@/shared/lib/features';
import { Input } from '@/shared/ui/redesigned/Input';
import { Text } from '@/shared/ui/redesigned/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { VStack } from '@/shared/ui/redesigned/Stack';

interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = ({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    const username = useAppSelector(getLoginUsername);
    const password = useAppSelector(getLoginPassword);
    const error = useAppSelector(getLoginError);
    const isLoading = useAppSelector(getLoginIsLoading);

    const changeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch],
    );

    const changePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    const onLoginClick = useCallback(async () => {
        const res = await dispatch(loginByUsername({ username, password }));
        if (res.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [dispatch, password, username, onSuccess]);

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={
                    <VStack
                        gap={'24'}
                        className={classNames(cls.loginForm, {}, [className])}
                    >
                        <Text title={t('Авторизация')} />

                        {error && (
                            <Text
                                text={t('Вы ввели неверный логин или пароль')}
                                variant={'error'}
                            />
                        )}
                        <Input
                            onChange={changeUsername}
                            autofocus
                            placeholder={t('Логин')}
                            value={username}
                        />
                        <Input
                            onChange={changePassword}
                            placeholder={t('Пароль')}
                            value={password}
                        />
                        <Button
                            className={cls.button}
                            disabled={isLoading}
                            onClick={onLoginClick}
                        >
                            {t('Войти')}
                        </Button>
                    </VStack>
                }
                off={
                    <div
                        className={classNames(cls.loginFormDeprecated, {}, [
                            className,
                        ])}
                    >
                        <TextDeprecated title={t('Авторизация')} />

                        {error && (
                            <TextDeprecated
                                text={t('Вы ввели неверный логин или пароль')}
                                theme={TextTheme.ERROR}
                            />
                        )}
                        <InputDepoprecated
                            onChange={changeUsername}
                            autofocus
                            placeholder={t('Логин')}
                            value={username}
                        />
                        <InputDepoprecated
                            onChange={changePassword}
                            placeholder={t('Пароль')}
                            value={password}
                        />
                        <ButtonDeprecated
                            disabled={isLoading}
                            onClick={onLoginClick}
                        >
                            {t('Войти')}
                        </ButtonDeprecated>
                    </div>
                }
            />
        </DynamicModuleLoader>
    );
};

export default LoginForm;
