import React, { useEffect } from 'react';
import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';

import { AppRouter } from 'app/providers/Router';
import Navbar from 'widgets/Navbar/ui/Navbar';
import { Sidebar } from 'widgets/Sidebar';

const App = () => {
  const { theme } = useTheme();
  // useEffect(() => {
  //   throw Error('123');
  // }, []);
  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className="app-wrapper">
        <Sidebar />
        <div className="page-wrapper">
          <AppRouter />
        </div>
      </div>
    </div>
  );
};

export default App;
