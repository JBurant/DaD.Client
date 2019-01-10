import { NgModule } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { CommonModule } from '@angular/common';
import { ArticleProvider } from './services/article/article-provider.service';

@NgModule({
  declarations: [],
  exports: [],
  imports: [CommonModule],
  providers: [ArticleProvider],
  bootstrap: [AppComponent]
})
export class CoreModule { }
