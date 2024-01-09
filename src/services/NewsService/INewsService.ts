import { Article } from './Article.ts';
import { ApiQueryCollectionResult } from '../Common/ApiResult.ts';

export default interface INewsService {
  getLatestArticles(skip: number, take: number): Promise<ApiQueryCollectionResult<Article>>
}