/* 代码清单列表 */
export type Manifest = {
  files: File[]
  package?: {
    dependencies?: object
    devDependencies?: object
    peerDependencies?: object
  }
}

/* 代码清单列表 */
export type File = {
  name: string
  path: string
}

/* 请求类型: Manifest */
export type ParamsManifest = {
  name: string
}

/* 请求类型: Code */
export type ParamsCode = {
  path: string
}
