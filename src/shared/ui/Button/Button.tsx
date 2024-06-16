import React, { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme{
  CLEAR = 'clear',
  CREAR_INVERTED = 'clear-inverted',
  OUTLINED = 'outlined',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'background-inverted'
}
export enum ButtonSize{
  M= 'size-m',
  L = 'size-l',
  XL = 'size-xl'
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string,
  onClick?: ()=>void,
  theme?: ButtonTheme,
  square?: boolean,
  size?: ButtonSize,
  disabled?: boolean
}
const Button:FC<ButtonProps> = ({
  className,
  onClick,
  children,
  theme = ButtonTheme.CLEAR,
  size = ButtonSize.M,
  square,
  disabled,
  ...otherProps
}) => {
  const additional = [className, cls[theme], cls[size]];
  return (
    <button
      type="button"
      className={classNames(cls.Button, { [cls.square]: square, [cls.disabled]: disabled }, additional)}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
