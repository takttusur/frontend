import './ViewPage.css'
import ViewWidget from '../../widgets/eda-view/ViewWidget.tsx'
import { useState } from 'react'

interface IViewPageState {
    isLoading: boolean
}

const initialState: IViewPageState = {
    isLoading: true,
}

export default function ViewPage(): JSX.Element {
    const [state, setState] = useState<IViewPageState>(initialState)

    if (state.isLoading) {
        setTimeout(() => {
            setState((prevState) => ({ ...prevState, isLoading: false }))
        }, 5000)
    }

    return <ViewWidget id="0" isLoading={state.isLoading} />
}
