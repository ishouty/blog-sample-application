export type BlogPost = {
  id: number;
  body: string;
  headline: string;
  author_id?: number;
  author?: string | null;
  author_image?: URL | string;
  body_image?: URL | string;
  genre?: string;
  canonical_url: string;
  commentCount?: number;
  date_created: string | Date;
  date_updated?: string | Date;
  date_published?: string | Date;
};
