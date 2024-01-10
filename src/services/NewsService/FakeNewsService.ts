import { ApiQueryCollectionResult } from '../Common/ApiResult.ts'
import { Article } from './Article.ts'
import INewsService from './INewsService.ts'

const text1 =
    'Ура, мы добыли от партизана информацию и готовы рассказать об одном из приключений наших одноклуббников!'
const url1 = 'https://vk.com/wall-597969_6555'

const text2 =
    'На этих выходных прошли Чемпионат города Томска (2 класс) и Чемпионат Томской области (3 класс) - ' +
    'дистанция спелео 🦇\n' +
    '\n' +
    'Участники нашего клуба были как главными организаторами и судьями соревнований, так и выступили в ' +
    'составе делегации от клуба в обоих классах.'
const url2 = 'https://vk.com/wall-597969_6544'
const image2 =
    'https://sun9-26.userapi.com/impg/xupcAS2Xfot6lgCEIasDyCQIAxB84in_b21aPw/rZHMWis1gq4.jpg?size=573x768&quality=96&sign=1e338ab66c6c76b27338fa2a638e4c3d&type=album'

const text3 =
    'Совсем недавно отгремели ноябрьские праздники🎉🎉\n' +
    '\n' +
    'Наши одноклубники успели хорошенько отдохнуть и сходить/сводить 4 спелео похода и 1 пешеходный.'
const url3 = 'https://vk.com/wall-597969_6538'
const image3 =
    'https://sun9-55.userapi.com/impg/SlZyA01zbu0KlcUXSzB9v-OwPRriWwC6uYfxrg/a8aFqV7dhcg.jpg?size=2560x1920&quality=95&sign=4f3c3e49637ce37a5f71a6e4d61a4bc6&type=album'

const REQUEST_DELAY = 3000
export class FakeNewsService implements INewsService {
    getLatestArticles(
        skip: number,
        take: number
    ): Promise<ApiQueryCollectionResult<Article>> {
        const total = 3
        return new Promise<ApiQueryCollectionResult<Article>>((resolve) => {
            const data: Article[] = [
                new Article(text1, url1),
                new Article(text2, url2, image2),
                new Article(text3, url3, image3),
            ]
            setTimeout(() => {
                resolve(new ApiQueryCollectionResult(data, take, skip, total))
            }, REQUEST_DELAY)
        })
    }
}
