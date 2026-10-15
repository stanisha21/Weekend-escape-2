export interface FAQItem {
  question: string;
  answer: string;
}

export interface ArticleContentSection {
  heading: string;
  directAnswer?: string; // For AEO (Answer Engine Optimization)
  paragraphs: string[];
  bulletPoints?: string[];
  tableData?: {
    headers: string[];
    rows: string[][];
  };
  callout?: {
    title: string;
    text: string;
  };
}

export interface Article {
  slug: string;
  path: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  mainKeyword: string;
  relatedKeywords: string[];
  readTime: string;
  wordCount: number;
  publishedDate: string;
  author: string;
  category: string;
  image: string;
  imageAlt: string;
  caption: string;
  shortDescription: string;
  introduction: string[];
  sections: ArticleContentSection[];
  conclusion: string[];
  faqs: FAQItem[];
  relatedArticlePaths: string[];
}
