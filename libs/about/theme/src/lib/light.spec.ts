import { AboutLightTheme } from './light';

describe('Light Theme', () => {
  it('should work', () => {
    expect(AboutLightTheme).toBeDefined();
    expect(AboutLightTheme.theme).toEqual('light');
    expect(AboutLightTheme.color).toBeDefined();
    expect(AboutLightTheme.background).toBeDefined();
    expect(AboutLightTheme.text).toBeDefined();
  });
});
