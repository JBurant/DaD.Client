import { Component } from '@angular/core';
import { BackendService } from 'src/app/core/services/backend/backend.service';
import { ArticleModel } from 'src/app/core/services/article/models/article.model';
import { ArticleHeader } from '../../../../core/services/article/models/article-header.model';

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
    let articleModel: ArticleModel  = new ArticleModel({name: this.fileName, author: "TestAuthor", timeCreated: new Date(Date.now()), timeModified: new Date(Date.now())},  this.fileContent);
    this.backend.post<ArticleModel>(configServerUrl + articlesUrl + "?Overwrite=false", articleModel)
    .subscribe(response => 
      {        
        console.log(response);
      }
    ); 
  }
}
