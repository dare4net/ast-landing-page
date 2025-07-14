import { MetadataRoute } from 'next'

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/'],
        disallow: ['/private/', '/api/', '/_next/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/private/', '/api/'],
      }
    ],
    sitemap: 'https://after-school.tech/sitemap.xml',
    host: 'https://after-school.tech',
  }
}
