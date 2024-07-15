import { profileActions, profileReducer, updateProfileData } from 'entities/Profile';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ProfileSchema, ValidateProfileError } from '../types/profile';

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
describe('profile slice', () => {
  test('setReadonly', () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: false,
    };
    expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true))).toEqual({ readonly: true });
  });
  test('cancelEdit', () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: false,
      data: profile,
      form: { ...profile, lastname: 'test', age: 23 },
    };
    expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({
      readonly: true,
      data: profile,
      form: profile,
    });
  });
  test('updateProfile one', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: profile,
    };
    expect(profileReducer(state as ProfileSchema, profileActions.updateProfile({
      age: 54,
    }))).toEqual({
      form: {
        ...profile,
        age: 54,
      },
    });
  });
  test('updateProfile two', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: profile,
    };
    expect(profileReducer(state as ProfileSchema, profileActions.updateProfile({
      age: 54,
      currency: Currency.EUR,
    }))).toEqual({
      form: {
        ...profile,
        age: 54,
        currency: Currency.EUR,
      },
    });
  });
  test('updateProfileData pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.INCORRECT_USER_DATA, ValidateProfileError.INCORRECT_COUNTRY],
    };
    expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({
      isLoading: true,
      validateErrors: undefined,
    });
  });
  test('updateProfileData fullfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
      validateErrors: [ValidateProfileError.INCORRECT_USER_DATA, ValidateProfileError.INCORRECT_COUNTRY],
      readonly: false,
    };
    expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(profile, ''))).toEqual({
      validateErrors: undefined,
      isLoading: false,
      data: profile,
      form: profile,
      readonly: true,
    });
  });
  test('updateProfileData rejected', () => {
    const validateErrors = [ValidateProfileError.INCORRECT_USER_DATA, ValidateProfileError.INCORRECT_COUNTRY];

    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
      validateErrors: undefined,
    };
    const action = {
      type: updateProfileData.rejected.type,
      payload: validateErrors,
    };
    expect(profileReducer(state as ProfileSchema, action)).toEqual({
      validateErrors,
      isLoading: false,
    });
  });
});
