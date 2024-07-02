import { RootState } from 'app/providers/StoreProvider';

export const getProfileReadonly = (state: RootState) => state.profile?.readonly;
