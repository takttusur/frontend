import { ApiQueryCollectionResult } from '../Common/ApiResult.ts'
import { Article } from './Article.ts'
import INewsService from './INewsService.ts'
import seasonImageService from '../SeasonImageService'

const text1 =
    'Ура, мы добыли от партизана информацию и готовы рассказать об одном из приключений наших одноклуббников!'
const url1 = 'https://vk.com/wall-597969_6555'
///
const text2 =
    'На этих выходных прошли Чемпионат города Томска (2 класс) и Чемпионат Томской области (3 класс) - ' +
    'дистанция спелео 🦇\n' +
    '\n' +
    'Участники нашего клуба были как главными организаторами и судьями соревнований, так и выступили в ' +
    'составе делегации от клуба в обоих классах.'
const url2 = 'https://vk.com/wall-597969_6544'
const date2 = new Date(2024, 1, 1)
///
const text3 =
    'Совсем недавно отгремели ноябрьские праздники🎉🎉\n' +
    '\n' +
    'Наши одноклубники успели хорошенько отдохнуть и сходить/сводить 4 спелео похода и 1 пешеходный.'
const url3 = 'https://vk.com/wall-597969_6538'
const date3 = new Date(2023, 9, 15)
///
const text4 =
    'Сегодня мы хотим вам показать и рассказать, про одну из весёлых и познавательных тренировок на отделении РТФ💙'
const url4 = 'https://vk.com/wall-597969_6511'
const date4 = new Date(2023, 7, 10)
///
const text5 =
    'Прошлые выходные были насыщенными на события: ТАКТовцы успели организовать и посетить Новичковый выезд, ' +
    'поучаствовать в Амазоновском марафоне в пеших, вело и мото дистанциях, а также сходить в спелеопоход.\n'
const url5 = 'https://vk.com/wall-597969_6508'
const date5 = new Date(2023, 5, 28)
///
const text6 =
    'В минувшие выходные прошло ещё одно интересное мероприятие – XV АМАЗОНОВСКИЙ ОСЕННИЙ ТУРИСТСКИЙ МАРАФОН . ' +
    'Многие из наших одноклубников приняли участие в нём, и согласились рассказать, как всё прошло.'
const url6 = 'https://vk.com/wall-597969_6477'
const date6 = new Date(2023, 9, 15)

const REQUEST_DELAY = 3000
export class FakeNewsService implements INewsService {
    getLatestArticles(
        skip: number,
        take: number
    ): Promise<ApiQueryCollectionResult<Article>> {
        const total = 30
        return new Promise<ApiQueryCollectionResult<Article>>(
            (resolve, reject) => {
                const oneDayBefore = new Date()
                oneDayBefore.setDate(oneDayBefore.getDate() - 1)
                const data: Article[] = [
                    new Article(
                        text1,
                        url1,
                        oneDayBefore,
                        seasonImageService.getRandomPlaceholderForDate(
                            oneDayBefore
                        )
                    ),
                    new Article(
                        text2,
                        url2,
                        date2,
                        seasonImageService.getRandomPlaceholderForDate(date2)
                    ),
                    new Article(
                        text3,
                        url3,
                        date3,
                        seasonImageService.getRandomPlaceholderForDate(date3)
                    ),
                    new Article(
                        text4,
                        url4,
                        date4,
                        seasonImageService.getRandomPlaceholderForDate(date4)
                    ),
                    new Article(
                        text5,
                        url5,
                        date5,
                        seasonImageService.getRandomPlaceholderForDate(date5)
                    ),
                    new Article(
                        text6,
                        url6,
                        date6,
                        seasonImageService.getRandomPlaceholderForDate(date6)
                    ),
                ]

                const rand = Math.floor(Math.random() * 2)
                if (rand === 1) {
                    setTimeout(() => {
                        reject()
                    }, REQUEST_DELAY)
                    return
                }
                if (skip > total) {
                    resolve(new ApiQueryCollectionResult([], take, skip, total))
                    return
                }
                setTimeout(() => {
                    resolve(
                        new ApiQueryCollectionResult(data, take, skip, total)
                    )
                }, REQUEST_DELAY)
            }
        )
    }
}
