/**
 * 判断是否是外部的URL
 * @param path string
 * @returns Boolean
 */
export const isExternal = (path: string) => /^(https?:|mailto:|tel:)/.test(path)
