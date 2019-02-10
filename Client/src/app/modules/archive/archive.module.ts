import { NgModule } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { CommonModule } from '@angular/common';
import { ArchiveList } from './components/archive-list/archive-list.component';
import { CoreModule } from 'src/app/core/core.module';
import { ArticleModule } from 'src/app/modules/article/article.module';
import { BackendService } from 'src/app/core/services/backend/api/backend.service';

@NgModule({
  declarations: [ArchiveList],
  exports: [ArchiveList],
  imports: [CommonModule, CoreModule, ArticleModule],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class ArchiveModule { }
