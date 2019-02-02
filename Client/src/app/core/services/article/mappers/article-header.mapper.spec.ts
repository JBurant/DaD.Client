import { ArticleHeader} from '../models/article-header.model';
import { ArticleHeaderServer} from '../models/article-header-server.model';
import { serverArticleHeaderMapper, articleHeaderServerMapper} from './article-header.mapper';

describe('Article-header mapper', () => {
    const created = new Date(2019, 1, 1, 1, 1, 1, 1);
    const modified = new Date(2019, 2, 2, 2, 2, 2, 2);

    const articleHeaderMock: ArticleHeader = {
            name: "TestName", 
            author: "TestAuthor", 
            timeCreated: created,
            timeModified: modified
    };

    const articleHeaderServerMock: ArticleHeaderServer = { 
            Name: "TestName", 
            Author: "TestAuthor", 
            TimeCreated: created,
            TimeModified: modified
    };

    it('should map article header to server article header correctly', () => {    
        const expectedHeaderResult = articleHeaderServerMock;

        const articleHeaderServer = articleHeaderServerMapper(articleHeaderMock);

        expect(articleHeaderServer).toEqual(expectedHeaderResult);
    })

    it('should map server article header to article header correctly', () => {    
        const expectedHeaderResult = articleHeaderMock;

        const articleHeader = serverArticleHeaderMapper(articleHeaderServerMock);

        expect(articleHeader).toEqual(expectedHeaderResult);
    })
});
