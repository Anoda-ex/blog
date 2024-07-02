import { FC, ReactNode, useEffect } from 'react';
import { ReducersList, ReduxStoreWithManager, RootStateKey } from 'app/providers/StoreProvider';
import { Reducer } from '@reduxjs/toolkit';
import { useStore } from 'react-redux';

interface DynamicModuleLoaderProps {
  children: ReactNode,
  reducers: ReducersList,
  removeAfterUnmount?: boolean;
}
const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = ({ children, reducers, removeAfterUnmount }) => {
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]) => {
      store.reducerManager.add(name as RootStateKey, reducer);
    });
    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]) => {
          store.reducerManager.remove(name as RootStateKey);
        });
      }
    };
  }, []);
  return (
    // eslint-disable-next-line
    <>
      {children}
    </>
  );
};
export default DynamicModuleLoader;
