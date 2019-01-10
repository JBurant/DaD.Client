import { Component } from '@angular/core';
import { ArticleProvider } from '../../../../core/services/article/article-provider.service';
import { ArticleHeader } from '../../../../core/services/article/article-header.service';

@Component({
  selector: 'archive-list',
  templateUrl: './archive-list.html',
  styleUrls: ['./archive-list.scss']
})
export class ArchiveList {
  private articles: ArticleHeader[];
  private articleProvider: ArticleProvider;

  constructor() {
    this.articleProvider = new ArticleProvider();
    this.articles = this.articleProvider.getListOfArticles();
  }
}
