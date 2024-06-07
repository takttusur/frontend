import GrayPanel from '../../components/Common/GrayPanel.tsx'
import ExpandablePanel from '../../components/Common/ExpandablePanel.tsx'
import ScrollLayout from '../../components/Common/ScrollLayout.tsx'
import PrimaryButton from '../../shared/ui/PrimaryButton.tsx'
import SecondaryButton from '../../shared/ui/SecondaryButton.tsx'

function IntroductionPage(): JSX.Element {
    return (
        <ScrollLayout>
            <GrayPanel title="Твой помощник в составлении раскладки">
                <p>
                    Мы автоматически составим оптимальное меню на несколько
                    дней. Никаких лишних продуктов и ненужных проблем – только
                    удовольствие от похода! Путешествуйте легко и комфортно с
                    нашим сервисом!
                </p>
                <PrimaryButton title="Начать" />
                <SecondaryButton
                    title="Импорт из Google Таблиц"
                    disabled={true}
                />
            </GrayPanel>
            <GrayPanel title="FAQ">
                <ExpandablePanel title="Как пользоваться нашим сервисом?">
                    123321
                </ExpandablePanel>
            </GrayPanel>
        </ScrollLayout>
    )
}

export default IntroductionPage
