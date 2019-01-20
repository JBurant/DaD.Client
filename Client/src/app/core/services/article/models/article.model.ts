import { ArticleHeader } from './article-header.model'

export class ArticleModel {
  public header: ArticleHeader;
  public content: string;

  constructor(
    header: ArticleHeader,
    content: string,
  ) {
    this.header = header;
    this.content = content;
  }
}
