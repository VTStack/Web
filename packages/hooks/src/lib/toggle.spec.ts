import { useToggle } from './toggle';
import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils';

describe('Toggle', () => {
  test('Toggle Function using normal mode', () => {
    const hook = renderHook(() => useToggle()) as any;
    let hookInfo = hook.result.current;
    expect(hookInfo[0]).toEqual(false);

    act(() => hookInfo[1]());

    hookInfo = hook.result.current;

    expect(hookInfo[0]).toBe(true);
  });

  test('Toggle Function using experimental mode', () => {
    const hook = renderHook(() => useToggle([0, 1]));
    let hookInfo = hook.result.current;

    expect(hookInfo[0]).toEqual(0);

    act(() => hookInfo[1]());

    hookInfo = hook.result.current;

    expect(hookInfo[0]).toBe(1);

    act(() => hookInfo[1]());

    hookInfo = hook.result.current;

    expect(hookInfo[0]).toBe(0);
  });
});
