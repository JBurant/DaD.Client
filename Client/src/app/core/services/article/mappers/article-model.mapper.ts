import { ArticleModelServer } from '../models/article-server.model';
import { ArticleModel } from '../models/article.model';
import {serverArticleHeaderMapper, articleHeaderServerMapper} from './article-header.mapper'

export function serverArticleModelMapper(inputModel: ArticleModelServer): ArticleModel
{
    return {
        header: serverArticleHeaderMapper(inputModel.ArticleHeader),
        content: inputModel.ArticleContent,
    }
}

export function articleModelServerMapper(inputModel: ArticleModel): ArticleModelServer
{
    return {
        ArticleHeader: articleHeaderServerMapper(inputModel.header),
        ArticleContent: inputModel.content,
    }
}