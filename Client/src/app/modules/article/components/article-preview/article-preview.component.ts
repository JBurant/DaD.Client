import { Component, Input } from '@angular/core';
import { ArticleModel } from 'src/app/core/services/article/models/article.model'

@Component({
  selector: 'article-preview',
  templateUrl: './article-preview.html',
  styleUrls: ['./article-preview.scss', '../../shared/article-styles.scss']
})

export class ArticlePreview {
  @Input() articleModel: ArticleModel;
}
