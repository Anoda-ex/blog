import React, { useEffect } from 'react';
import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';

import { AppRouter } from 'app/providers/Router';
import Navbar from 'widgets/Navbar/ui/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useAppDispatch } from 'shared/lib/hooks/reduxHooks/reduxHooks';
import { userActions } from 'entities/User';

const App = () => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, []);
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
