export declare type Nullable<T> = T | null
export declare interface Fn<T = any, R = T> {
  (...arg: T[]): R
}
export declare type TimeoutHandle = ReturnType<typeof setTimeout>