import './CardPanel.css'
import { PropsWithChildren } from 'react'

export interface GrayPanelProps {
    title?: string
}

export default function CardPanel(
    props: PropsWithChildren<GrayPanelProps>
): JSX.Element {
    return (
        <div className="panel panel_card">
            {props.title && <h1>{props.title}</h1>}
            {props.children}
        </div>
    )
}
