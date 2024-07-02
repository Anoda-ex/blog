import { RootState } from 'app/providers/StoreProvider';

export const getProfileForm = (state: RootState) => state.profile?.form;
