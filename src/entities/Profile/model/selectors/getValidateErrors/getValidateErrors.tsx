import { RootState } from 'app/providers/StoreProvider';

export const getValidateErrors = (state: RootState) => state.profile?.validateErrors;
