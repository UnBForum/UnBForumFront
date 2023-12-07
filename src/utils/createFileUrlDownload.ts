import { FileData } from './interfaces'

export const createFileUrlDownload = (file: FileData): string => {
  const baseUrl = import.meta.env.VITE_API_ENDPOINT || 'http://localhost:8000'

  return `${baseUrl}files/download/${file.upload_path}`
}
