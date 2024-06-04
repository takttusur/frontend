import './DayPlanShort.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'

export default function DayPlanShort(): JSX.Element {
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
                        <tr>
                            <td>Завтрак</td>
                            <td>Молочная каша, чай</td>
                        </tr>
                        <tr>
                            <td>Обед</td>
                            <td>Борщ, хлеб</td>
                        </tr>
                        <tr>
                            <td>Ужин</td>
                            <td>Картошка с мясом, хлеб</td>
                        </tr>
                    </tbody>
                </table>
                <div className="day-plan-short-summary">810 грамм</div>
            </div>
        </div>
    )
}
