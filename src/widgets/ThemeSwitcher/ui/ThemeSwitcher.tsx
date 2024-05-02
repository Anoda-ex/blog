import React, { FC } from 'react';
import Button from 'shared/ui/Button/Button';
import { useTheme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';

import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

interface ThemeSwitcherProps {
  className?: string
}
const ThemeSwitcher:FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button className={className} onClick={toggleTheme}>
      {
        theme === Theme.LIGHT
          ? <LightIcon /> : <DarkIcon />
      }
    </Button>
  );
};

export default ThemeSwitcher;
