import { ArticleHeaderServer } from '../models/article-header-server.model';
import { ArticleHeader } from '../models/article-header.model';

export function serverArticleHeaderMapper(inputModel: ArticleHeaderServer): ArticleHeader
{
    return {
        name: inputModel.Name,
        author: inputModel.Author,
        timeCreated: inputModel.TimeCreated,
        timeModified: inputModel.TimeModified
    }
}

export function articleHeaderServerMapper(inputModel: ArticleHeader): ArticleHeaderServer
{
    return {
        Name: inputModel.name,
        Author: inputModel.author,
        TimeCreated: inputModel.timeCreated,
        TimeModified: inputModel.timeModified
    }
}