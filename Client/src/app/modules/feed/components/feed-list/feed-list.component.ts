import { Component, Injectable } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArticleModel } from 'src/app/core/services/article/article-model.service'
import { ArticleProvider } from 'src/app/core/services/article/article-provider.service'

@Component({
  selector: 'feed-list',
  templateUrl: './feed-list.html',
  styleUrls: ['./feed-list.scss']
})

export class FeedList {
  private articleModels: ArticleModel[];
  private articleProvider: ArticleProvider;

  constructor() {
    this.articleProvider = new ArticleProvider();
    this.articleModels = this.articleProvider.getArticles();
  }
}
