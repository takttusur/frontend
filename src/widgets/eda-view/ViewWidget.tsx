import { PropsWithoutRef } from 'react'
import Loader from './Loader.tsx'
import { IMealPlanDto } from '../../shared/api/types.ts'
import NotFound from './NotFound.tsx'
import ScrollLayout from '../../shared/ui/ScrollLayout.tsx'
import HeadTitle from '../../components/Common/HeadTitle.tsx'
import SwitchButton from '../../components/Common/SwitchButton.tsx'
import DayPlanShort from '../../components/Common/DayPlanShort.tsx'
import PrimaryButton from '../../shared/ui/PrimaryButton.tsx'
import BottomNavigation from '../../components/Common/BottonNavigation.tsx'

export interface IViewWidgetProps {
    mealPlan: IMealPlanDto | undefined
    isLoading: boolean
}

function renderDayPlans(mealPlan: IMealPlanDto): JSX.Element[] {
    return mealPlan.days.map((d) => (
        <DayPlanShort
            key={d}
            date={d}
            records={mealPlan.records.filter((r) => r.dateUtc === d)}
        />
    ))
}

function renderMealPlan(props: IViewWidgetProps): JSX.Element {
    return (
        <>
            <ScrollLayout>
                <HeadTitle title="Раскладка" />
                <SwitchButton options={[]} selectedValue={undefined} />
                {renderDayPlans(props.mealPlan!)}
                <span className="meal-summary-text">Всего: 7000 грамм</span>
                <PrimaryButton title="Экспорт раскладки"></PrimaryButton>
            </ScrollLayout>
            <BottomNavigation></BottomNavigation>
        </>
    )
}

export default function ViewWidget(
    props: PropsWithoutRef<IViewWidgetProps>
): JSX.Element {
    return (
        <>
            {props.isLoading && <Loader />}
            {!props.mealPlan && <NotFound />}
            {!props.isLoading && !!props.mealPlan && renderMealPlan(props)}
        </>
    )
}
