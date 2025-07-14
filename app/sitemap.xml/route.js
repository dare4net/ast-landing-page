import { MetadataRoute } from 'next'

export default async function sitemap() {
  const baseUrl = 'https://after-school.tech'

  // Define your routes
  const routes = [
    '',
    '/offline',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: route === '' ? 1 : 0.8,
  }))

  return routes
}
