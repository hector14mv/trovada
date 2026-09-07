export const basePath = '/trovada';
export const siteUrl = 'https://hector14mv.github.io/trovada/';
export function assetPath(filename: string) {
  return `${basePath}/${filename.replace(/^\//, '')}`;
}
