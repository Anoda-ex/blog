import { TestAsyncThunk } from 'shared/config/tests/TestAsyncThunk';
import { fetchProfileData } from './fetchProfileData';

const profile = {
  first: 'Alexandr1',
  lastname: 'Alex',
  age: 22,
  currency: 'USD',
  country: 'Ukraine',
  city: 'Kiev',
  username: 'admin',
  avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/512px-React_Logo_SVG.svg.png?20231112063719',
};

describe('fetchProfileData', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data: profile }));
    const result = await thunk.callThunk();
    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toBe(profile);
  });
  test('unsuccess', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();
    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
  });
});
