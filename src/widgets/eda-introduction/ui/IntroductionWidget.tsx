import { PropsWithoutRef } from 'react'
import CardPanel from '../../../shared/ui/CardPanel.tsx'
import PrimaryButton from '../../../shared/ui/PrimaryButton.tsx'
import SecondaryButton from '../../../shared/ui/SecondaryButton.tsx'

export interface IIntroductionWidgetProps {
    pathToCreatePage: string
}

export default function IntroductionWidget(
    props: PropsWithoutRef<IIntroductionWidgetProps>
): JSX.Element {
    return (
        <CardPanel title="Твой помощник в составлении раскладки">
            <p>
                Мы автоматически составим оптимальное меню на несколько дней.
                Никаких лишних продуктов и ненужных проблем – только
                удовольствие от похода! Путешествуйте легко и комфортно с нашим
                сервисом!
            </p>
            <PrimaryButton
                title="Начать"
                reactLink={{ to: props.pathToCreatePage }}
            />
            <SecondaryButton title="Импорт из Google Таблиц" disabled={true} />
        </CardPanel>
    )
}
