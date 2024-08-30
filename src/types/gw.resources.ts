type Directory = {
  name: string;
  path: string;
  children: Directory[]
}

type Library = {
  id?: number;
  folderId?: number;
  folderName?:string;
  folderPath?:string;
  name: string;
  cover?: string;
  updateTime?: string;
}

type Resource = {
  id: number,
  folderId: number,
  name: string,
  md5: string,
  ext: string,
  size: number,
  mimeType: string,
  thumbnail: boolean,
  lastModified: string,
  createTime: string,
  updateTime: string
}

export type {
  Directory,Library,Resource
}

