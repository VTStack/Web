import { DarkTheme } from './dark';

describe('Dark Theme', () => {
  it('should work', () => {
    expect(DarkTheme).toBeDefined();
    expect(DarkTheme.theme).toEqual('dark');
    expect(DarkTheme.color).toBeDefined();
    expect(DarkTheme.background).toBeDefined();
    expect(DarkTheme.text).toBeDefined();
  });
});
