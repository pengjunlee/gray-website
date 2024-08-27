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

export type {
  Directory,Library
}

