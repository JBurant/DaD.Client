import { ArticleModel} from '../models/article.model';
import { ArticleModelServer} from '../models/article-server.model';
import { serverArticleModelMapper, articleModelServerMapper} from './article-model.mapper';

describe('Article-model mapper', () => {
    const created = new Date(2019, 1, 1, 1, 1, 1, 1);
    const modified = new Date(2019, 2, 2, 2, 2, 2, 2);

    const articleModelMock: ArticleModel = { 
        header: { 
            name: "TestName", 
            author: "TestAuthor", 
            timeCreated: created,
            timeModified: modified,
            }, 
        content: "TestContent"
    };

    const articleModelServerMock: ArticleModelServer = { 
        ArticleHeader: { 
            Name: "TestName", 
            Author: "TestAuthor", 
            TimeCreated: created,
            TimeModified: modified,
            }, 
        ArticleContent: "TestContent"
    };

    it('should map article model to server article model correctly', () => {    
        const expectedModelResult = articleModelServerMock;

        const articleModelServer = articleModelServerMapper(articleModelMock);

        expect(articleModelServer).toEqual(expectedModelResult);
    })

    it('should map server article model to article model correctly', () => {    
        const expectedModelResult = articleModelMock;

        const articleModel = serverArticleModelMapper(articleModelServerMock);

        expect(articleModel).toEqual(expectedModelResult);
    })
});
