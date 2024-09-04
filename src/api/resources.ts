import { defaultRequest as rq } from './request_website'
import type { R } from './request_website'

/**
 * 获取资源目录列表
 * @param params
 * @returns
 */
export const resourcesDirectoriesApi = (): Promise<R<any>> => {
  return rq.get<R<any>>('/resource/directories')
}

/**
 * 新增资源库
 * @param params
 * @returns
 */
export const addLibraryApi = ( params: any ): Promise<R<any>> => {
  return rq.post<R<any>>('/resource/library/add', { ...params })
}

/**
 * 获取资源库列表
 * @param params
 * @returns
 */
export const listLibraryApi = (): Promise<R<any>> => {
  return rq.get<R<any>>('/resource/library/list')
}

/**
 * 删除资源库
 * @param params
 * @returns
 */
export const deleteLibraryApi = ( params: any ): Promise<R<any>> => {
  return rq.post<R<any>>('/resource/library/delete/'+params)
}

/**
 * 同步资源库
 * @param params
 * @returns
 */
export const refreshLibraryApi = ( params: any ): Promise<R<any>> => {
  return rq.post<R<any>>('/resource/library/refresh/'+params)
}


/**
 * 获取资源列表
 * @param params
 * @returns
 */
export const listResourceApi = (): Promise<R<any>> => {
  return rq.get<R<any>>('/resource/resource/list')
}

/**
 * 分页获取资源列表
 * @param params
 * @returns
 */
export const pageResourceApi = (params:any): Promise<R<any>> => {
  return rq.post<R<any>>('/resource/page',{...params})
}