import { ArticleHeader } from './article-header.service'

export class ArticleModel {
  private header: ArticleHeader;
  private content: string;

  constructor(
    header: ArticleHeader,
    content: string,
  ) {
    this.header = header;
    this.content = content;
  }
}
