import './SettingsPage.css'
import { useNavigate } from 'react-router-dom'
import { ROUTE_INTRODUCTION, ROUTE_VIEW } from './index.tsx'
import CreateWidget from '../../widgets/eda-create/ui/CreateWidget.tsx'
import { ICreateEdaDto } from '../../shared/api/EdaApi.ts'
import { useState } from 'react'

function CreatePage(): JSX.Element {
    const [state, setState] = useState<boolean>(false)
    const navigate = useNavigate()
    const handleCancel = (): void => {
        navigate(ROUTE_INTRODUCTION.path)
    }

    const handleSubmit = (form: ICreateEdaDto): void => {
        console.log(form)
        setState(true)
        setTimeout(() => {
            navigate(ROUTE_VIEW.path.replace(':id', '12342'))
        }, 2000)
    }

    return (
        <CreateWidget
            onCancel={handleCancel}
            onSubmit={handleSubmit}
            isLocked={state}
        />
    )
}

export default CreatePage
