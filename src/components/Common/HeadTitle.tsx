import { PropsWithChildren } from 'react'
import './HeadTitle.css'
import HollowButton from './HollowButton.tsx'

export interface IHeadTitleProps {
    title: string
}

export default function HeadTitle(
    props: PropsWithChildren<IHeadTitleProps>
): JSX.Element {
    return (
        <div className="head-title">
            <span className="head-title-text">{props.title}</span>
            <HollowButton
                title="Редактировать"
                disabled={false}
                profile="low"
            />
        </div>
    )
}
