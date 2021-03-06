import { Component, Input } from '@angular/core';
import { ArticleHeader } from 'src/app/core/services/article/models/article-header.model';

@Component({
  selector: 'article-info',
  templateUrl: './article-info.html',
  styleUrls: ['./article-info.scss', '../../shared/article-styles.scss']
})
export class ArticleInfo {
   @Input() articleHeader: ArticleHeader;
}
