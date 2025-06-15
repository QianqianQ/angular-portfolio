import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(
    private meta: Meta,
    private title: Title
  ) {}

  updateTitle(title: string): void {
    this.title.setTitle(title);
  }

  updateMetaTags(config: {
    title?: string;
    description?: string;
    keywords?: string;
    author?: string;
    image?: string;
    url?: string;
    type?: string;
  }): void {
    if (config.title) {
      this.updateTitle(config.title);
      this.meta.updateTag({ property: 'og:title', content: config.title });
      this.meta.updateTag({ name: 'twitter:title', content: config.title });
    }

    if (config.description) {
      this.meta.updateTag({ name: 'description', content: config.description });
      this.meta.updateTag({ property: 'og:description', content: config.description });
      this.meta.updateTag({ name: 'twitter:description', content: config.description });
    }

    if (config.keywords) {
      this.meta.updateTag({ name: 'keywords', content: config.keywords });
    }

    if (config.author) {
      this.meta.updateTag({ name: 'author', content: config.author });
    }

    if (config.image) {
      this.meta.updateTag({ property: 'og:image', content: config.image });
      this.meta.updateTag({ name: 'twitter:image', content: config.image });
    }

    if (config.url) {
      this.meta.updateTag({ property: 'og:url', content: config.url });
      this.meta.updateTag({ name: 'twitter:url', content: config.url });
    }

    if (config.type) {
      this.meta.updateTag({ property: 'og:type', content: config.type });
    }

    // Default Twitter card type
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
  }

  updateCanonicalUrl(url: string): void {
    let link: HTMLLinkElement | null = document.querySelector('link[rel="canonical"]');

    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }

    link.setAttribute('href', url);
  }

  addStructuredData(data: any): void {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    document.head.appendChild(script);
  }

  generatePersonStructuredData(portfolioData: any): any {
    return {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": portfolioData.about?.FULL_NAME || "Portfolio Owner",
      "description": portfolioData.about?.ABOUT_ME || "",
      "url": window.location.origin,
      "sameAs": portfolioData.contactInfo?.map((contact: any) => contact.link).filter(Boolean) || [],
      "jobTitle": "Software Developer",
      "worksFor": {
        "@type": "Organization",
        "name": portfolioData.experience?.[0]?.company || ""
      }
    };
  }
}