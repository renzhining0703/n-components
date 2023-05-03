import type { Nullable, Fn, TimeoutHandle } from '../types/index'

export function useClickThrottle(handle: Fn, wait = 1000) {
  let timeoutId: Nullable<TimeoutHandle> = null
  function fn(this: unknown, ...args: any) {
    if (!timeoutId) {
      handle.apply(this, args)
      timeoutId = setTimeout(() => (timeoutId = null), wait)
    }
  }
  return wait > 0 ? fn : handle
}
