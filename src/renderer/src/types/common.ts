
export type Nullable<T> = {
  [K in keyof T]: T[K] extends (...args: infer P) => any
    ? (...args: { [I in keyof P]: P[I] | null }) => ReturnType<T[K]>
    : T[K] | null
}
export type NullableString = string | null
export type StringNumber = string | number
export type NullableStringNumber = StringNumber | null
export type NullableNumber = number | null
export type NullableBoolean = boolean | null
