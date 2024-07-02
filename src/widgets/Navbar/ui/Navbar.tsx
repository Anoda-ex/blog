import React, { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/reduxHooks/reduxHooks';
import { getUserAuthData, userActions } from 'entities/User';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}
const Navbar:FC<NavbarProps> = ({ className }) => {
  const dispatch = useAppDispatch();
  const authData = useAppSelector(getUserAuthData);
  const [isAuthOpen, setIsAuthOpen] = useState<boolean>(false);
  const onOpenAuth = useCallback(() => {
    setIsAuthOpen(true);
  }, []);
  const onCloseAuth = useCallback(() => {
    setIsAuthOpen(false);
  }, []);
  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, []);
  if (authData) {
    return (
      <div className={classNames(cls.Navbar, {}, [className])}>
        <Button theme={ButtonTheme.CREAR_INVERTED} onClick={onLogout}>Выйти</Button>
      </div>
    );
  }
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button theme={ButtonTheme.CREAR_INVERTED} onClick={onOpenAuth}>Войти</Button>
      <LoginModal isOpen={isAuthOpen} onClose={onCloseAuth} />
    </div>
  );
};

export default Navbar;
