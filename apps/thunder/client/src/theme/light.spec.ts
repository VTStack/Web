import { ThunderLightTheme } from './light';

describe('Light Theme', () => {
  it('should work', () => {
    expect(ThunderLightTheme).toBeDefined();
    expect(ThunderLightTheme.theme).toEqual('light');
    expect(ThunderLightTheme.color).toBeDefined();
    expect(ThunderLightTheme.background).toBeDefined();
    expect(ThunderLightTheme.text).toBeDefined();
  });
});
