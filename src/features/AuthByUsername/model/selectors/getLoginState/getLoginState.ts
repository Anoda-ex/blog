import { RootState } from 'app/providers/StoreProvider';
import { initialState } from '../../slice/initialState';

export const getLoginState = (state: RootState) => state.loginForm || initialState;
