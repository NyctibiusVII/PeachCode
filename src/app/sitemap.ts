import { MetadataRoute } from 'next'

export default function Sitemap(): MetadataRoute.Sitemap {
    const defaultPages = [
        {
            url: '/',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1
        },
        {
            url: '/projects',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9
        }
    ] as MetadataRoute.Sitemap

    return defaultPages
}