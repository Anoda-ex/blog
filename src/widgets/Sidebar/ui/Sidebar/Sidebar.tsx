import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import Button from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
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
      <Button data-testid="toggle" onClick={onToggle}>Toggle</Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        {/* <LangSwitcher className={cls.lang} /> */}
      </div>
    </div>
  );
};