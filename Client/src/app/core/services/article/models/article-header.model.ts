export class ArticleHeader {
  public name: string;
  public author: string;
  public timeCreated: Date;
  public timeModified: Date;

  constructor(
    name: string,
    author: string,
    timeCreated: Date,
    timeModified: Date,
  ) {
    this.name = name;
    this.author = author;
    this.timeCreated = timeCreated;
    this.timeModified = timeModified;
  }
}
