import HeaderText from '../shared/ui/HeaderText.tsx'
import FlexLayout from '../shared/ui/FlexLayout.tsx'
import './HomePage.css'
import SecondaryButton from '../shared/ui/SecondaryButton.tsx'
import PrimaryButton from '../shared/ui/PrimaryButton.tsx'
import rootAppRoutingMap from './index.tsx'
import CardPanel from '../shared/ui/CardPanel.tsx'

export default function HomePage(): JSX.Element {
    return (
        <FlexLayout className="home-page">
            <HeaderText level={1}>
                Туристско-Альпинистский клуб ТУСУРа
            </HeaderText>
            <CardPanel>
                <PrimaryButton
                    title="Создать раскладку"
                    reactLink={{ to: rootAppRoutingMap.Eda.path }}
                ></PrimaryButton>
                <SecondaryButton title="Центральный склад" disabled={true} />
                <SecondaryButton title="Личный кабинет" disabled={true} />
            </CardPanel>
        </FlexLayout>
    )
}
