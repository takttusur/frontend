import ScrollLayout from '../../components/Common/ScrollLayout.tsx'
import HeadTitle from '../../components/Common/HeadTitle.tsx'
import SwitchButton, {
    ISwitchButtonOptions,
} from '../../components/Common/SwitchButton.tsx'
import DayPlanShort from '../../components/Common/DayPlanShort.tsx'
import BottomNavigation from '../../components/Common/BottonNavigation.tsx'
import BlueButton from '../../components/Common/BlueButton.tsx'
import './ViewPage.css'

const options: ISwitchButtonOptions[] = [
    {
        text: 'Общий',
        value: 'Общий',
    },
    {
        text: 'По дням',
        value: 'По дням',
    },
]

export default function ViewPage(): JSX.Element {
    return (
        <div>
            <ScrollLayout>
                <HeadTitle title="Раскладка" />
                <SwitchButton options={options} selectedValue={options[0]} />
                <DayPlanShort />
                <DayPlanShort />
                <DayPlanShort />
                <span className="meal-summary-text">Всего: 7000 грамм</span>
                <BlueButton title="Экспорт раскладки"></BlueButton>
            </ScrollLayout>
            <BottomNavigation></BottomNavigation>
        </div>
    )
}
