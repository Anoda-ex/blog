import React, { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme{
  CLEAR = 'clear',
  OUTLINED = 'outlined'
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string,
  onClick?: ()=>void,
  theme?: ButtonTheme
}
const Button:FC<ButtonProps> = ({
  className, onClick, children, theme = ButtonTheme.CLEAR, ...otherProps
}) => (
  <button type="button" className={classNames(cls.Button, {}, [className, cls[theme]])} onClick={onClick} {...otherProps}>
    {children}
  </button>
);

export default Button;
