import { classNames, ClassNamesMods } from 'shared/lib/classNames/classNames';
import React, {
  ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import Portal from 'shared/ui/Portal/Portal';
import cls from './Modal.module.scss';

export interface ModalControlProps {
  isOpen?: boolean;
  onClose?: () => void;
}
interface ModalProps extends ModalControlProps{
    className?: string;
    children?: ReactNode;
    lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
  const {
    className,
    children,
    isOpen,
    onClose,
    lazy,
  } = props;

  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  // Новые ссылки!!!
  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler();
    }
  }, [closeHandler]);

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  const mods: ClassNamesMods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  };
  if (lazy && !isOpen) {
    return null;
  }
  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className])}>
        <div className={cls.overlay} onClick={closeHandler}>
          <div
            className={cls.content}
            onClick={onContentClick}
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
