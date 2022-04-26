import { ThunderDarkTheme } from './dark';

describe('Dark Theme', () => {
  it('should work', () => {
    expect(ThunderDarkTheme).toBeDefined();
    expect(ThunderDarkTheme.theme).toEqual('dark');
    expect(ThunderDarkTheme.color).toBeDefined();
    expect(ThunderDarkTheme.background).toBeDefined();
    expect(ThunderDarkTheme.text).toBeDefined();
  });
});
