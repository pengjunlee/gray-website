import { defaultRequest as rq } from './request'
import type { R } from './request'

/**
 * 获取资源目录列表
 * @param params
 * @returns
 */
export const resourcesDirectoriesApi = (): Promise<R<any>> => {
  return rq.get<R<any>>('/resourcesMgt/directories')
}

/**
 * 新增资源库
 * @param params
 * @returns
 */
export const addLibraryApi = ( params: any ): Promise<R<any>> => {
  return rq.post<R<any>>('/resourcesMgt/library/add', { ...params })
}

/**
 * 获取资源库列表
 * @param params
 * @returns
 */
export const listLibraryApi = (): Promise<R<any>> => {
  return rq.get<R<any>>('/resourcesMgt/library/list')
}