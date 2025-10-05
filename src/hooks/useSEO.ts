import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
}

export const useSEO = ({
  title,
  description,
  keywords,
  ogImage = '/images/gaetan-profile.jpg',
  ogType = 'website',
  canonical
}: SEOProps) => {
  useEffect(() => {
    // Update title
    document.title = `${title} | Gaëtan Jonathan`;

    // Update meta tags
    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords || '' },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: ogImage },
      { property: 'og:type', content: ogType },
      { property: 'twitter:title', content: title },
      { property: 'twitter:description', content: description },
      { property: 'twitter:image', content: ogImage },
    ];

    metaTags.forEach(({ name, property, content }) => {
      const attribute = name ? 'name' : 'property';
      const value = name || property;
      
      if (content) {
        let element = document.querySelector(`meta[${attribute}="${value}"]`);
        
        if (!element) {
          element = document.createElement('meta');
          element.setAttribute(attribute, value!);
          document.head.appendChild(element);
        }
        
        element.setAttribute('content', content);
      }
    });

    // Update canonical URL
    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      
      canonicalLink.setAttribute('href', canonical);
    }
  }, [title, description, keywords, ogImage, ogType, canonical]);
};

export default useSEO;