import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedList } from 'src/app/modules/feed/components/feed-list/feed-list.component';
import { FeedModule } from 'src/app/modules/feed/feed.module'
import { ArticleModule } from 'src/app/modules/article/article.module'
import { EditorModule } from 'src/app/modules/editor/editor.module'
import { Editor } from './modules/editor/components/editor/editor.component';
import { ArchiveList } from './modules/archive/components/archive-list/archive-list.component';
import { ArchiveModule } from './modules/archive/archive.module';


const routes: Routes = [
  { path: 'feed-list', component: FeedList },
  { path: 'editor', component: Editor },
  { path: 'archive', component: ArchiveList}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FeedModule, ArticleModule, EditorModule, ArchiveModule],
  exports: [RouterModule]
})

export class AppRoutingModule { }
