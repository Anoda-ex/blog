import { TestAsyncThunk } from 'shared/config/tests/TestAsyncThunk';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { updateProfileData } from './updateProfileData';

const profile = {
  first: 'Alexandr1',
  lastname: 'Alex',
  age: 22,
  currency: Currency.USD,
  country: Country.Ukraine,
  city: 'Kiev',
  username: 'admin',
  avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/512px-React_Logo_SVG.svg.png?20231112063719',
};

describe('fetchProfileData', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: profile,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ data: profile }));
    const result = await thunk.callThunk();
    console.debug(result);
    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toBe(profile);
  });
  test('validation error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: { ...profile, first: '' },
      },
    });

    const result = await thunk.callThunk();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });
  test('server error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: profile,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();
    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
  });
});
