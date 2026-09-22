/// <reference types="vite/client" />

export const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');
export function assetPath(filename: string) {
  return `${basePath}/${filename.replace(/^\//, '')}`;
}
