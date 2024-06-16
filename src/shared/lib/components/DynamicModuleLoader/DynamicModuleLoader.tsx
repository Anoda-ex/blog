import { FC, ReactNode, useEffect } from 'react';
import { ReducersList, ReduxStoreWithManager, RootStateKey } from 'app/providers/StoreProvider';
import { Reducer } from '@reduxjs/toolkit';
import { useStore } from 'react-redux';

interface DynamicModuleLoaderProps {
  children: ReactNode,
  reducers: ReducersList
}
type ReducerEntry = [RootStateKey, Reducer];
const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = ({ children, reducers }) => {
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducerEntry) => {
      store.reducerManager.add(name, reducer);
    });
  }, []);
  return (
    // eslint-disable-next-line
    <>
      {children}
    </>
  );
};
export default DynamicModuleLoader;
