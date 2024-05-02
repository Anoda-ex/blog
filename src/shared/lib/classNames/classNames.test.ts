import { classNames } from './classNames';

describe('classNames', () => {
  test('classnames main', () => {
    expect(classNames('test')).toBe('test');
  });
  test('classnames mode true', () => {
    expect(classNames('test', { testMode: true })).toBe('test testMode');
  });
  test('classnames mode true - false', () => {
    expect(classNames('test', { testMode: false, next: true })).toBe('test next');
  });
  test('classnames mode undefined', () => {
    expect(classNames('test', { placeholder: undefined })).toBe('test');
  });
});
