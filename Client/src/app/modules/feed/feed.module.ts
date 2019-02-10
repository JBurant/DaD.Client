import { NgModule } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { FeedList } from './components/feed-list/feed-list.component'
import { ArticleModule } from 'src/app/modules/article/article.module'
import { CommonModule } from '@angular/common';
import { BackendService } from 'src/app/core/services/backend/api/backend.service';

@NgModule({
  declarations: [FeedList],
  exports: [FeedList],
  imports: [ArticleModule, CommonModule],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class FeedModule { }
