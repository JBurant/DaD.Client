import { Component } from '@angular/core';
import { BackendService } from 'src/app/core/services/backend/backend.service';
import { ArticleModel } from 'src/app/core/services/article/models/article.model';
import { articleModelServerMapper } from 'src/app/core/services/article/mappers/article-model.mapper';
import { ArticleModelServer } from '../../../../core/services/article/models/article-server.model';

const configServerUrl: string = 'https://dad-server.azurewebsites.net';
const articlesUrl = '/Articles';
@Component({
  selector: 'editor',
  templateUrl: './editor.html',
  styleUrls: ['./editor.scss']
})

export class Editor {
  IsUploadVisible: boolean;
  fileName: string;
  fileContent: string;

  constructor(private backend: BackendService)
  {
    this.IsUploadVisible = false;
  }

  onUploadFile()
  {
    this.IsUploadVisible = (!this.IsUploadVisible);
  }

  onSendFile()
  {
    let articleModel: ArticleModel  = {header: {name: this.fileName, author: "TestAuthor", timeCreated: new Date(Date.now()), timeModified: new Date(Date.now())}, content: this.fileContent};
    this.backend.post<ArticleModelServer>(configServerUrl + articlesUrl + "?Overwrite=true", articleModelServerMapper(articleModel))
    .subscribe(response => 
      {        
        console.log(response);
      }
    ); 
  }
}
