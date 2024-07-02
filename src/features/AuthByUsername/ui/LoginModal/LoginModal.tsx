import React, { FC, Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal, ModalControlProps } from 'shared/ui/Modal/Modal';
import { Loader } from 'shared/ui/Loader/Loader';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps extends ModalControlProps{
  className?: string
}
export const LoginModal:FC<LoginModalProps> = ({ className, isOpen, onClose }) => (
  <Modal className={classNames('', {}, [className])} isOpen={isOpen} onClose={onClose} lazy>
    <Suspense fallback={<Loader />}>
      <LoginFormAsync onClose={onClose} />
    </Suspense>
  </Modal>
);
