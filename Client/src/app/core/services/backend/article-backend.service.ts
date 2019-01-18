import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticleModel } from '../article/article-model.service';

const getAllArticlesUrl: string = '/Posts/All';
const articlesUrl: string = '/Posts';

@Injectable()
export class ArticleBackendService {
  constructor(private http: HttpClient) { }

getListOfArticles() {
  return this.http.get<ArticleModel>(getAllArticlesUrl, { observe: 'response' });
}

getArticle(articleName: string)
{
  return this.http.get<ArticleModel>(articlesUrl + '?' + articleName, { observe: 'response' });
}

postArticle(articleName: string, article: ArticleModel)
{
  return this.http.post(articlesUrl + '?' + articleName, article,    
    {
		  observe: 'response'
		});
}
}
