export class ArticleHeader {
  private name: string;
  private timestamp: string;
  private author: string;

  constructor(
    name: string,
    timestamp: string,
    author: string,
  ) {
    this.name = name;
    this.timestamp = timestamp;
    this.author = author;
  }
}
