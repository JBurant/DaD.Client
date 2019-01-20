import { Component, Injectable } from '@angular/core';
import { ArticleModel } from 'src/app/core/services/article/models/article.model';
import { serverArticleModelMapper } from 'src/app/core/services/article/mappers/article-model.mapper';
import { serverArticleHeaderMapper } from 'src/app/core/services/article/mappers/article-header.mapper';
import { BackendService } from 'src/app/core/services/backend/backend.service';
import { ArticleHeader } from 'src/app/core/services/article/models/article-header.model';
import { ArticleHeaderServer } from 'src/app/core/services/article/models/article-header-server.model';

const configServerUrl: string = 'https://dad-server.azurewebsites.net';
const getAllArticlesUrl: string = '/Articles/All';
const articlesUrl: string = '/Articles';

@Component({
  selector: 'feed-list',
  templateUrl: './feed-list.html',
  styleUrls: ['./feed-list.scss']
})

export class FeedList {
  private articleModels: ArticleModel[];
  private message: string;
  private serverHeaders: ArticleHeaderServer[] = [];
  private parsedHeaders: ArticleHeader[] = [];
  
  constructor(private backend: BackendService) {
    this.getAllArticles();
    this.articleModels = [];
  }

  getAllArticles(){
    let headers: ArticleHeaderServer[];

 
    this.backend.get(configServerUrl + getAllArticlesUrl)    
    .subscribe(
      response => {
        JSON.parse(response.message).forEach(header => this.parsedHeaders.push(serverArticleHeaderMapper(header)));
        this.parsedHeaders.forEach(header => this.getArticle(header.name));
      }
      );
  }

  getArticle(articleName: string) {
    this.backend.get(configServerUrl + articlesUrl + '?ArticleName=' + articleName)
    .subscribe(response => 
      {        
        console.log(response);
        this.articleModels.push(serverArticleModelMapper(JSON.parse(response.message)));
      }
        ); 
  }
}
