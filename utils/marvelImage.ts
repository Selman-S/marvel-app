// Marvel CDN often returns http URLs; next/image only allows the https host.
export function marvelImage(path?: string, extension?: string) {
  if (!path || !extension) return ''
  return `${path}.${extension}`.replace(/^http:\/\//i, 'https://')
}
