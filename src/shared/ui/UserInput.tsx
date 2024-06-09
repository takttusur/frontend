import './UserInput.css'
import { ChangeEventHandler, PropsWithoutRef } from 'react'
import { UserInputContainer } from './UserInputContainer.tsx'

export interface ITextInputProps {
    title: string
    placeholder?: string
    inputType: 'text' | 'number'
    disabled?: boolean
    value: string
    onChange?: (val: string) => void
}

export default function UserInput(
    props: PropsWithoutRef<ITextInputProps>
): JSX.Element {
    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        switch (props.inputType) {
            case 'number':
                if (Number.isNaN(event.target.value)) {
                    return
                }
                break
            case 'text':
            default:
                break
        }
        props.onChange?.(event.target.value)
    }

    return (
        <UserInputContainer title={props.title}>
            <input
                className="line-input"
                type={props.inputType}
                placeholder={props.placeholder}
                value={props.value}
                onChange={handleChange}
                disabled={props.disabled === true}
            ></input>
        </UserInputContainer>
    )
}
