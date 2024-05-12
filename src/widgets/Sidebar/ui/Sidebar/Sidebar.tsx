import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import Button, { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
      data-testid="sidebar"
    >
      <Button
        data-testid="toggle"
        className={cls.toggle}
        onClick={onToggle}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square
        size={ButtonSize.L}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.links}>
        <AppLink to="/" theme={AppLinkTheme.INVERTED}>
          <div className={cls.linkWrapper}>
            <MainIcon className={cls.linkIcon} />
            <span className={cls.link}>
              Главная
            </span>
          </div>
        </AppLink>
        <AppLink to="/about" theme={AppLinkTheme.INVERTED}>
          <div className={cls.linkWrapper}>
            <AboutIcon className={cls.linkIcon} />
            <span className={cls.link}>
              О сайте
            </span>
          </div>
        </AppLink>
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        {/* <LangSwitcher className={cls.lang} /> */}
      </div>
    </div>
  );
};
