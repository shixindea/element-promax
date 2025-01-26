// export type InternalNamePath = (string | number)[]
// export type NamePath = string | number | InternalNamePath
// export type Recordable<T extends any = any> = Record<string, T>
export type InternalNamePath = (string | number)[]
export type NamePath = string | number | InternalNamePath
export type Recordable<T = any> = Record<string, T>
