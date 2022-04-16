import { LightTheme } from './light';

describe('Light Theme', () => {
  it('should work', () => {
    expect(LightTheme).toBeDefined();
    expect(LightTheme.theme).toEqual('light');
    expect(LightTheme.color).toBeDefined();
    expect(LightTheme.background).toBeDefined();
    expect(LightTheme.text).toBeDefined();
  });
});
