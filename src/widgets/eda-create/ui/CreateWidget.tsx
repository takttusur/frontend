import { PropsWithoutRef, useState } from 'react'
import ScrollLayout from '../../../shared/ui/ScrollLayout.tsx'
import CardPanel from '../../../shared/ui/CardPanel.tsx'
import SecondaryButton from '../../../shared/ui/SecondaryButton.tsx'
import PrimaryButton from '../../../shared/ui/PrimaryButton.tsx'
import UserInput from '../../../shared/ui/UserInput.tsx'
import { ICreateEdaDto } from '../../../shared/api/types.ts'

export interface ICreateWidgetProps {
    onSubmit: (form: ICreateEdaDto) => void
    onCancel: () => void
    isLocked?: boolean
}

interface ICreateWidgetState {
    dto: ICreateEdaDto
}

const initialState: ICreateWidgetState = {
    dto: {
        days: 1,
        peoplesCount: 3,
    },
}

export default function CreateWidget(
    props: PropsWithoutRef<ICreateWidgetProps>
): JSX.Element {
    const [state, setState] = useState<ICreateWidgetState>(initialState)

    const handleSubmit = (): void => {
        props.onSubmit(state.dto)
    }

    const handleDaysChanged = (value: string): void => {
        if (Number.isNaN(value)) return
        let days = Number.parseInt(value)
        if (value.length === 0) {
            days = 0
        }
        setState((prevState) => ({
            ...prevState,
            dto: { ...prevState.dto, days },
        }))
    }

    const handlePeoplesChanged = (value: string): void => {
        if (Number.isNaN(value)) return
        let peoplesCount = Number.parseInt(value)
        if (value.length === 0) {
            peoplesCount = 0
        }
        setState((prevState) => ({
            ...prevState,
            dto: { ...prevState.dto, peoplesCount },
        }))
    }

    return (
        <ScrollLayout>
            <CardPanel title="Заполнение анкеты">
                <UserInput
                    title="На сколько дней в поход?"
                    placeholder="Количество дней"
                    inputType="number"
                    onChange={handleDaysChanged}
                    value={state.dto.days.toString()}
                    disabled={props.isLocked}
                ></UserInput>
                <UserInput
                    title="Сколько человек идёт?"
                    placeholder="Количество человек"
                    inputType="number"
                    onChange={handlePeoplesChanged}
                    value={state.dto.peoplesCount.toString()}
                    disabled={props.isLocked}
                ></UserInput>
                <div className="eda-settings-buttons">
                    <SecondaryButton
                        title="Назад"
                        onClick={props.onCancel}
                        disabled={props.isLocked ?? false}
                    />
                    <PrimaryButton
                        title="Вперёд"
                        onClick={handleSubmit}
                        disabled={props.isLocked}
                    />
                </div>
            </CardPanel>
        </ScrollLayout>
    )
}
