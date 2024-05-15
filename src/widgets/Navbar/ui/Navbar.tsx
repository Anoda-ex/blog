import React, { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}
const Navbar:FC<NavbarProps> = ({ className }) => {
  const [isAuthOpen, setIsAuthOpen] = useState<boolean>(false);
  const toggleModal = useCallback(() => {
    setIsAuthOpen((prev) => !prev);
  }, []);
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.LinksWrapper}>
        <Button theme={ButtonTheme.CREAR_INVERTED} onClick={toggleModal}>Войти</Button>
        <Modal isOpen={isAuthOpen} onClose={toggleModal}>
          lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
          lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
          lorem lorem lorem lorem lorem lorem lorem
        </Modal>
      </div>
    </div>
  );
};

export default Navbar;
