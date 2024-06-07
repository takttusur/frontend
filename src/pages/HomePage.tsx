import HeaderText from '../shared/ui/HeaderText.tsx'
import FlexLayout from '../shared/ui/FlexLayout.tsx'
import GrayPanel from '../components/Common/GrayPanel.tsx'
import './HomePage.css'
import SecondaryButton from '../shared/ui/SecondaryButton.tsx'
import PrimaryButton from '../shared/ui/PrimaryButton.tsx'

export default function HomePage(): JSX.Element {
    return (
        <FlexLayout className="home-page">
            <HeaderText level={1}>
                Туристско-Альпинистский клуб ТУСУРа
            </HeaderText>
            <GrayPanel>
                <PrimaryButton title="Создать раскладку"></PrimaryButton>
                <SecondaryButton title="Центральный склад" disabled={true} />
                <SecondaryButton title="Личный кабинет" disabled={true} />
            </GrayPanel>
        </FlexLayout>
    )
}
