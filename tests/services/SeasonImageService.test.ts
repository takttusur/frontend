import SeasonImageService from '../../src/services/SeasonImageService/SeasonImageService.ts'

interface ISeasonCase {
    season: string
    date: Date
    seasonNumber: number
}

describe('DateService', () => {
    const service = new SeasonImageService()

    const cases: ISeasonCase[] = [
        {
            season: 'Winter',
            date: new Date(2023, 0, 13),
            seasonNumber: 0,
        },
        {
            season: 'Spring',
            date: new Date(2023, 3, 20),
            seasonNumber: 1,
        },
        {
            season: 'Summer',
            date: new Date(2023, 5, 30),
            seasonNumber: 2,
        },
        {
            season: 'Autumn',
            date: new Date(2023, 8, 9),
            seasonNumber: 3,
        },
    ]

    it.each(cases)('should return picture for $season season', (arg) => {
        expect(
            service.getRandomPlaceholderForDate(arg.date)
        ).not.toBeUndefined()
    })

    it.each(cases)(
        'should return $seasonNumber as a season number for $season',
        (arg) => {
            expect(service.getSeasonNumber(arg.date)).toBe(arg.seasonNumber)
        }
    )

    it.each(cases)(
        'should return picture for season number: $seasonNumber',
        (arg) => {
            expect(
                service.getRandomPlaceholderForSeason(arg.seasonNumber)
            ).not.toBeUndefined()
        }
    )

    it.each([-1, 4])(
        'should throw exception for invalid season number',
        (arg) => {
            expect(() => {
                service.getRandomPlaceholderForSeason(arg)
            }).toThrow()
        }
    )
})
