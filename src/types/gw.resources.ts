type Directory = {
  name: string;
  path: string;
  children: Directory[]
}

type Collection = {
  id?: number;
  name: string;
  thumbnailUrl?: string;
}

type Library = {
  id?: number;
  folderId?: number;
  collectionId?: number;
  folderName?:string;
  collectionName?:string;
  folderPath?:string;
  name: string;
  cover?: string;
  updateTime?: string;
}

type Resource = {
  id: number,
  folderId?: number,
  name: string,
  md5?: string,
  ext?: string,
  size?: number,
  mimeType?: string,
  thumbnail?: boolean,
  thumbnailUrl: string,
  previewUrl: string,
  lastModified?: string,
  createTime?: string,
  updateTime?: string
}

interface ResourceSearch {
  resourceTypes?: number[]|number;
  collectionId?: number[]|number;
  libraryId?: number[]|number;
}

interface IntEnumOption {
  value: number;
  name: string;
}

export type {
  Directory,Library,Resource,ResourceSearch,IntEnumOption,Collection
}

