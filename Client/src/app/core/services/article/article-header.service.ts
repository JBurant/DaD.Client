export class ArticleHeader {
  private name: string;
  private timeCreated: string;
  private timeModified: string;
  private author: string;

  constructor(
    name: string,
    author: string,
    timeCreated: string,
    timeModified: string,
  ) {
    this.name = name;
    this.timeCreated = timeCreated;
    this.timeModified = timeModified;
    this.author = author;
  }
}
