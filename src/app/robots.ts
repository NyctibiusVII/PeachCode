import { MetadataRoute } from 'next'
import { rootUrl } from '@PeachCodeData'

export default function Robots(): MetadataRoute.Robots {
    let allow = [
        '/',
        '/projects'
    ]

    return {
        rules: {
            userAgent: '*',
            allow
        },
        sitemap: `${rootUrl}/sitemap.xml`
    }
}