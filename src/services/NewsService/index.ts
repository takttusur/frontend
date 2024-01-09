import INewsService from "./INewsService.ts";
import {FakeNewsService} from "./FakeNewsService.ts";

const NewsService : INewsService = new FakeNewsService();

export default NewsService;