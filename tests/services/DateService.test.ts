import DateService from '../../src/services/DateService/DateService.ts'

describe('DateService', () => {
    const service = new DateService()

    it('should return date for 3 days back', () => {
        const localeStrOptions: Intl.NumberFormatOptions = {
            minimumIntegerDigits: 2,
        }
        const locale: string = 'ru-RU'
        const date = new Date()
        date.setDate(date.getDate() - 3)
        date.setHours(0)
        date.setMinutes(0)

        expect(service.understandableDate(date)).toBe(
            `00:00 ${date
                .getDate()
                .toLocaleString(locale, localeStrOptions)}.${(
                1 + date.getMonth()
            ).toLocaleString(locale, localeStrOptions)}.${date.getFullYear()}`
        )
    })

    it('should return date distance for recent date', () => {
        const date = new Date()
        date.setMinutes(date.getMinutes() - 1)

        expect(service.understandableDate(date)).toBe('1 минуту назад')
    })
})
