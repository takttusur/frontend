import * as dateFns from 'date-fns'
import { ru } from 'date-fns/locale'

export default class DateService {
    public understandableDate(date: Date): string {
        if (Math.abs(dateFns.differenceInDays(date, new Date())) <= 2)
            return dateFns.formatDistanceToNow(date, {
                locale: ru,
                addSuffix: true,
            })
        return dateFns.format(date, 'HH:mm dd.MM.yyyy')
    }
}
