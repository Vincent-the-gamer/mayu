export function useBaseUrl(event: any): string {
  const { baseUrl, env } = useRuntimeConfig(event)
  const cloudflareBase = 'https://mayu.erxianqiaottjt.workers.dev'

  let base = baseUrl

  if (env === 'cloudflare') {
    base = cloudflareBase
  }

  return base
}