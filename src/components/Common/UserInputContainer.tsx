import { PropsWithChildren } from 'react'
import './UserInputContainer.css'

export interface IUserInputContainerProps {
    title: string
}

export function UserInputContainer(
    props: PropsWithChildren<IUserInputContainerProps>
): JSX.Element {
    return (
        <div className="user-input-container">
            <label>{props.title}</label>
            {props.children}
        </div>
    )
}
