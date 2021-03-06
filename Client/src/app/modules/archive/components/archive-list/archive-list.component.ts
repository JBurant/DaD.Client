import { Component } from '@angular/core';
import { BackendService } from 'src/app/core/services/backend/api/backend.service';
import { ArticleHeader } from 'src/app/core/services/article/models/article-header.model';
import { ArticleHeaderServer } from 'src/app/core/services/article/models/article-header-server.model';
import { serverArticleHeaderMapper } from 'src/app/core/services/article/mappers/article-header.mapper';

const configServerUrl: string = 'https://dad-server.azurewebsites.net';
const getAllArticlesUrl: string = '/Articles/All';

@Component({
  selector: 'archive-list',
  templateUrl: './archive-list.html',
  styleUrls: ['./archive-list.scss']
})
export class ArchiveList {
  public articles: ArticleHeader[] = [];
  public serverHeaders: ArticleHeaderServer[] = [];

  constructor(private backend: BackendService) {
    this.articles = this.getListOfArticles();
  }

  getListOfArticles():  ArticleHeader[]{
    let headers: ArticleHeader[] = [];
    this.backend.get(configServerUrl + getAllArticlesUrl)
    .subscribe(response  => {
      JSON.parse(response.message).forEach(header => headers.push(serverArticleHeaderMapper(header)));
    });
    return headers;
  }
}
