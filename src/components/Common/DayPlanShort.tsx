import './DayPlanShort.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { IMealPlanRecordDto } from '../../shared/api/types.ts'

export interface IDayPlanShortProps {
    date: string
    records: IMealPlanRecordDto[]
}

function parseEatingTime(eatingTime: number): string {
    switch (eatingTime) {
        case 1:
            return 'Завтрак'
        case 2:
            return 'Утренний перекус'
        case 3:
            return 'Обед'
        case 4:
            return 'Вечерний перекус'
        case 5:
            return 'Ужин'
        default:
            return 'Неопределенное время'
    }
}

export default function DayPlanShort(props: IDayPlanShortProps): JSX.Element {
    const eatingTime = [1, 2, 3, 4, 5]

    return (
        <div className="day-plan-short">
            <span className="day-plan-short-title">1 день</span>
            <div className="day-plan-short-meals">
                <table className="day-plan-short-grid">
                    <thead>
                        <tr>
                            <th>Прием пищи</th>
                            <th className="day-plan-short-modify">
                                <span>Блюда</span>
                                <FontAwesomeIcon
                                    icon={faEllipsis}
                                    className="day-plan-short-modify-icon"
                                />
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {eatingTime.map((r) => (
                            <tr key={r}>
                                <td>{parseEatingTime(r)}</td>
                                <td>
                                    {props.records
                                        .filter((x) => x.eatingTime === r)
                                        .map((x) => x.recipeName)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="day-plan-short-summary">810 грамм</div>
            </div>
        </div>
    )
}
