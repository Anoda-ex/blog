import { LoginSchema } from 'features/AuthByUsername';

export const initialState: LoginSchema = {
  username: '',
  password: '',
  isLoading: false,
  error: undefined,
};
