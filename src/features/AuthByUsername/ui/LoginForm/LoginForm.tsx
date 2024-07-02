import React, { FC, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Button from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/reduxHooks/reduxHooks';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import DynamicModuleLoader from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ReducersList } from 'app/providers/StoreProvider';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import cls from './LoginForm.module.scss';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';

interface LoginFormProps {
  className?: string,
  onClose?: () => void
}
const reducers:ReducersList = {
  loginForm: loginReducer,
};
const LoginForm:FC<LoginFormProps> = ({ className, onClose }) => {
  const dispatch = useAppDispatch();
  const {
    username, password, isLoading, error,
  } = useAppSelector(getLoginState);
  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      onClose?.();
    }
  }, [dispatch, password, username]);
  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.LoginForm, {}, [className])}>
        <Text title="Форма авторизации" />
        {error && <Text text="Вы ввели неверный логин или пароль" theme={TextTheme.ERROR} />}
        <Input
          value={username}
          onChange={(value) => { dispatch(loginActions.setUsername(value)); }}
          placeholder="Введите имя"
          autofocus
        />
        <Input
          value={password}
          onChange={(value) => { dispatch(loginActions.setPassword(value)); }}
          placeholder="Введите пароль"
        />
        <Button className={cls.LoginBtn} onClick={onLoginClick} disabled={isLoading}>Войти</Button>
      </div>
    </DynamicModuleLoader>
  );
};

export default LoginForm;
