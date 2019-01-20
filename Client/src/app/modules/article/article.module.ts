import { NgModule } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ArticlePreview } from './components/article-preview/article-preview.component'
import { ArticleInfo } from './components/article-info/article-info.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ArticlePreview, ArticleInfo],
  exports: [ArticlePreview, ArticleInfo],
  imports: [CommonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class ArticleModule { }
