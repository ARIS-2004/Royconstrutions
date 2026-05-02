import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
}

export function useSEO({ title, description, canonical, ogImage }: SEOProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, prop: 'name' | 'property', value: string) => {
      let el = document.querySelector(`meta[${prop}="${name}"]`) as HTMLMetaElement;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(prop, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };

    setMeta('description',          'name',     description);
    setMeta('og:title',             'property', title);
    setMeta('og:description',       'property', description);
    setMeta('twitter:title',        'name',     title);
    setMeta('twitter:description',  'name',     description);

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!link) { link = document.createElement('link'); link.rel = 'canonical'; document.head.appendChild(link); }
      link.href = canonical;
      setMeta('og:url', 'property', canonical);
    }

    if (ogImage) {
      setMeta('og:image',       'property', ogImage);
      setMeta('twitter:image',  'name',     ogImage);
    }
  }, [title, description, canonical, ogImage]);
}
