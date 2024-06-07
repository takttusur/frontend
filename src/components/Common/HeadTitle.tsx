import { PropsWithChildren } from 'react'
import './HeadTitle.css'
import SecondaryButton from '../../shared/ui/SecondaryButton.tsx'

export interface IHeadTitleProps {
    title: string
}

export default function HeadTitle(
    props: PropsWithChildren<IHeadTitleProps>
): JSX.Element {
    return (
        <div className="head-title">
            <span className="head-title-text">{props.title}</span>
            <SecondaryButton
                title="Редактировать"
                disabled={false}
                profile="small"
            />
        </div>
    )
}
