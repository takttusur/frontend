import ScrollLayout from '../../shared/ui/ScrollLayout.tsx'
import { ROUTE_CREATE } from './index.tsx'
import IntroductionWidget from '../../widgets/eda-introduction/ui/IntroductionWidget.tsx'
import FaqWidget from '../../widgets/eda-introduction/ui/FaqWidget.tsx'

function IntroductionPage(): JSX.Element {
    return (
        <ScrollLayout>
            <IntroductionWidget pathToCreatePage={ROUTE_CREATE.path} />
            <FaqWidget />
        </ScrollLayout>
    )
}

export default IntroductionPage
