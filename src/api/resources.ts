import { defaultRequest as rq } from './request'
import type { R } from './request'

/**
 * 获取资源目录列表
 * @param params
 * @returns
 */
export const resourcesDirectoriesApi = (): Promise<R<any>> => {
  return rq.get<R<any>>('/resourceMgt/directories')
}

/**
 * 新增资源库
 * @param params
 * @returns
 */
export const addLibraryApi = ( params: any ): Promise<R<any>> => {
  return rq.post<R<any>>('/resourceMgt/library/add', { ...params })
}

/**
 * 获取资源库列表
 * @param params
 * @returns
 */
export const listLibraryApi = (): Promise<R<any>> => {
  return rq.get<R<any>>('/resourceMgt/library/list')
}

/**
 * 删除资源库
 * @param params
 * @returns
 */
export const deleteLibraryApi = ( params: any ): Promise<R<any>> => {
  return rq.post<R<any>>('/resourceMgt/library/delete/'+params)
}

/**
 * 同步资源库
 * @param params
 * @returns
 */
export const refreshLibraryApi = ( params: any ): Promise<R<any>> => {
  return rq.post<R<any>>('/resourceMgt/library/refresh/'+params)
}


/**
 * 获取资源列表
 * @param params
 * @returns
 */
export const listResourceApi = (): Promise<R<any>> => {
  return rq.get<R<any>>('/resourceMgt/resource/list')
}