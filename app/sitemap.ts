import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ysoc.in'
  
  // Static pages
  const routes = [
    '',
    '/about',
    '/timeline',
    '/team',
    '/mentors',
    '/community-partners',
    '/sponsors',
    '/contact',
    '/recruit',
    '/faq',
    '/code-of-conduct',
    '/privacy-policy',
    '/terms-of-service',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route === '/recruit' ? 0.9 : 0.8,
  }))
}
