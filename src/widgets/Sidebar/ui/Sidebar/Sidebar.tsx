import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import Button, { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { sidebarItemsList } from 'widgets/Sidebar/lib/types';
import SidebarItem from 'widgets/Sidebar/ui/SidebarItem/SidebarItem';
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
      <div className={cls.items}>
        {sidebarItemsList.map((item) => <SidebarItem item={item} collapsed={collapsed} />)}
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        {/* <LangSwitcher className={cls.lang} /> */}
      </div>
    </div>
  );
};
