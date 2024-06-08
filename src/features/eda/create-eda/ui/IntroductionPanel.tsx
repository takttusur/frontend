import PrimaryButton from '../../../../shared/ui/PrimaryButton.tsx'
import SecondaryButton from '../../../../shared/ui/SecondaryButton.tsx'
import { PropsWithoutRef } from 'react'
import CardPanel from '../../../../shared/ui/CardPanel.tsx'

export interface IIntroductionPanelProps {
    pathToCreatePage: string
}

export default function IntroductionPanel(
    props: PropsWithoutRef<IIntroductionPanelProps>
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
