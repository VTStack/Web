import { usePagination, useToggle } from './toggle';
import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils';

describe('Toggle', () => {
  test('Toggle Function using normal mode', () => {
    const hook = renderHook(() => useToggle(false));
    let hookInfo = hook.result.current;
    expect(hookInfo[0]).toEqual(false);

    act(() => hookInfo[1]());

    hookInfo = hook.result.current;

    expect(hookInfo[0]).toBe(true);
  });

  test('Toggle Function using Array mode', () => {
    const hook = renderHook(() => usePagination<number>([0, 1, 2]));
    let { currentState, next, previous } = hook.result.current;

    expect(currentState).toEqual(0);

    act(() => next());

    ({ currentState, next, previous } = hook.result.current);

    expect(currentState).toBe(1);

    act(() => previous());

    ({ currentState, next, previous } = hook.result.current);

    // expect(hookInfo[0]).toBe(0);

    // act(() => hookInfo[1]());

    // hookInfo = hook.result.current;

    // expect(hookInfo[0]).toBe(0);
  });

  test('When passes out if range when using next', () => {
    const hook = renderHook(() => usePagination<number>([0, 1, 2]));
    let { currentState, next } = hook.result.current;

    expect(currentState).toEqual(0);

    act(() => {
      next();
    });
    ({ currentState, next } = hook.result.current);

    expect(currentState).toEqual(1);

    act(() => {
      next();
    });
    ({ currentState, next } = hook.result.current);

    expect(currentState).toEqual(2);

    act(() => {
      next();
    });
    ({ currentState, next } = hook.result.current);

    expect(currentState).toEqual(0);
  });

  test('When passes out if range when using next', () => {
    const hook = renderHook(() => usePagination<number>([0, 1, 2]));
    let { currentState, previous } = hook.result.current;

    expect(currentState).toEqual(0);

    act(() => {
      previous();
    });
    ({ currentState, previous } = hook.result.current);

    expect(currentState).toEqual(2);
  });

  test('When default assignment', () => {
    const hook = renderHook(() => useToggle());
    const hookInfo = hook.result.current;

    expect(hookInfo[0]).toEqual(false);
  });
});
