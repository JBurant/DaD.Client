import { Component } from '@angular/core';
import { BackendService } from 'src/app/core/services/backend/backend.service';
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
    this.getListOfArticles();
  }

  getListOfArticles() {
    let headers: ArticleHeader[] = [];
    this.backend.get(configServerUrl + getAllArticlesUrl)
    .subscribe(response  => 
      this.serverHeaders = JSON.parse(response.message).forEach(header => this.articles.push(serverArticleHeaderMapper(header)))
    );
  }
}
