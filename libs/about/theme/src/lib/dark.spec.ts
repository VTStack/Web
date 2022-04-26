import { AboutDarkTheme } from './dark';

describe('Dark Theme', () => {
  it('should work', () => {
    expect(AboutDarkTheme).toBeDefined();
    expect(AboutDarkTheme.theme).toEqual('dark');
    expect(AboutDarkTheme.color).toBeDefined();
    expect(AboutDarkTheme.background).toBeDefined();
    expect(AboutDarkTheme.text).toBeDefined();
  });
});
