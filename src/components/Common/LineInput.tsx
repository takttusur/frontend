import './LineInput.css'
import { PropsWithRef } from 'react'
import { UserInputContainer } from './UserInputContainer.tsx'

export interface ILineInputProps {
    title: string
    placeholder: string
    commonMask: 'text' | 'number'
}

export default function LineInput(
    props: PropsWithRef<ILineInputProps>
): JSX.Element {
    return (
        <UserInputContainer title={props.title}>
            <input
                className="line-input"
                type={props.commonMask}
                placeholder={props.placeholder}
            ></input>
        </UserInputContainer>
    )
}
