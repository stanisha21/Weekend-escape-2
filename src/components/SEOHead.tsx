import { useEffect } from 'react';
import { Article } from '../types';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath: string;
  keywords?: string[];
  article?: Article;
}

export function SEOHead({
  title,
  description,
  canonicalPath,
  keywords = [],
  article,
}: SEOHeadProps) {
  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // Helper to set or create meta tag
    const setMeta = (attrName: 'name' | 'property', attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Standard Meta Tags
    setMeta('name', 'description', description);
    if (keywords.length > 0) {
      setMeta('name', 'keywords', keywords.join(', '));
    }

    // 3. OpenGraph Tags
    const fullUrl = window.location.origin + canonicalPath;
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', fullUrl);
    setMeta('property', 'og:type', article ? 'article' : 'website');
    setMeta('property', 'og:site_name', 'Weekend Escape – Weekend Travel Guide');

    if (article) {
      const fullImageUrl = article.image.startsWith('http')
        ? article.image
        : `${window.location.origin}${article.image.startsWith('/') ? '' : '/'}${article.image}`;
      setMeta('property', 'og:image', fullImageUrl);
      setMeta('name', 'twitter:image', fullImageUrl);
    }

    // 4. Twitter Tags
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);

    // 5. Canonical Link Tag
    let canonicalTag = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', fullUrl);

    // 6. JSON-LD Structured Data
    const scriptId = 'seo-structured-data';
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    let structuredData: object;
    if (article) {
      const articleImgUrl = article.image.startsWith('http')
        ? article.image
        : `${window.location.origin}${article.image.startsWith('/') ? '' : '/'}${article.image}`;
      
      const graphItems: object[] = [
        {
          '@type': 'BlogPosting',
          '@id': `${fullUrl}#article`,
          headline: article.title,
          description: article.metaDescription,
          image: articleImgUrl,
          datePublished: '2026-10-15',
          dateModified: '2026-10-15',
          author: {
            '@type': 'Organization',
            name: article.author,
          },
          publisher: {
            '@type': 'Organization',
            name: 'Weekend Escape – Weekend Travel Guide',
            url: window.location.origin,
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': fullUrl,
          },
          keywords: [article.mainKeyword, ...article.relatedKeywords].join(', '),
        },
        {
          '@type': 'BreadcrumbList',
          '@id': `${fullUrl}#breadcrumb`,
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: window.location.origin,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: article.category,
              item: `${window.location.origin}/#articles-section`,
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: article.title,
              item: fullUrl,
            },
          ],
        },
      ];

      if (article.faqs && article.faqs.length > 0) {
        graphItems.push({
          '@type': 'FAQPage',
          '@id': `${fullUrl}#faq`,
          mainEntity: article.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        });
      }

      structuredData = {
        '@context': 'https://schema.org',
        '@graph': graphItems,
      };
    } else {
      structuredData = {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'WebSite',
            '@id': `${window.location.origin}#website`,
            name: 'Weekend Escape – Weekend Travel Guide',
            url: window.location.origin,
            description: description,
            keywords: keywords.join(', '),
            publisher: {
              '@type': 'Organization',
              name: 'Weekend Escape',
            },
          },
        ],
      };
    }

    scriptTag.textContent = JSON.stringify(structuredData);
  }, [title, description, canonicalPath, keywords, article]);

  return null;
}
