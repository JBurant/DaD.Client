import { NgModule } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { FeedList } from './components/feed-list/feed-list.component'
import { ArticleModule } from 'src/app/modules/article/article.module'
import { ArticleProvider } from 'src/app/core/services/article/article-provider.service'
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [FeedList],
  exports: [FeedList],
  imports: [ArticleModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class FeedModule { }
