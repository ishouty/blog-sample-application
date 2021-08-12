export type CommentType = {
  id: number;
  post_id: number;
  comment: string;
  author_id?: number;
  author: string | null;
  date_created: string | Date;
  date_updated: string | Date;
  date_published: string | Date;
};
