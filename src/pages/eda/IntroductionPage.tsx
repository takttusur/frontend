import IntroductionPanel from '../../features/eda/create-eda/ui/IntroductionPanel.tsx'
import FaqPanel from '../../features/eda/create-eda/ui/FaqPanel.tsx'
import ScrollLayout from '../../shared/ui/ScrollLayout.tsx'
import { ROUTE_CREATE } from './index.tsx'

function IntroductionPage(): JSX.Element {
    return (
        <ScrollLayout>
            <IntroductionPanel pathToCreatePage={ROUTE_CREATE.path} />
            <FaqPanel />
        </ScrollLayout>
    )
}

export default IntroductionPage
