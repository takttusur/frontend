import { PropsWithoutRef } from 'react'
import Loader from './Loader.tsx'

export interface IViewWidgetProps {
    id: string
    isLoading: boolean
}

export default function ViewWidget(
    props: PropsWithoutRef<IViewWidgetProps>
): JSX.Element {
    return (
        <>
            {props.isLoading && <Loader />}
            {/*<ScrollLayout>*/}
            {/*    <HeadTitle title="Раскладка" />*/}
            {/*    <SwitchButton options={options} selectedValue={options[0]} />*/}
            {/*    <DayPlanShort />*/}
            {/*    <DayPlanShort />*/}
            {/*    <DayPlanShort />*/}
            {/*    <span className="meal-summary-text">Всего: 7000 грамм</span>*/}
            {/*    <PrimaryButton title="Экспорт раскладки"></PrimaryButton>*/}
            {/*</ScrollLayout>*/}
            {/*<BottomNavigation></BottomNavigation>*/}
        </>
    )
}
