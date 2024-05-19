import GrayPanel from '../../components/Common/GrayPanel.tsx'
import BlueButton from '../../components/Common/BlueButton.tsx'
import HollowButton from '../../components/Common/HollowButton.tsx'
import ExpandablePanel from '../../components/Common/ExpandablePanel.tsx'

function IntroductionPage(): JSX.Element {
    return (
        <div>
            <GrayPanel title="Твой помощник в составлении раскладки">
                <p>
                    Мы автоматически составим оптимальное меню на несколько
                    дней. Никаких лишних продуктов и ненужных проблем – только
                    удовольствие от похода! Путешествуйте легко и комфортно с
                    нашим сервисом!
                </p>
                <BlueButton title="Начать" />
                <HollowButton title="Импорт из Google Таблиц" />
            </GrayPanel>
            <GrayPanel title="FAQ">
                <ExpandablePanel title="Как пользоваться нашим сервисом?"></ExpandablePanel>
            </GrayPanel>
        </div>
    )
}

export default IntroductionPage
