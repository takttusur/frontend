import './HeaderText.css'
import { PropsWithChildren } from 'react'

export interface IHeaderTextProps {
    level: 1 | 2 | 3
}

export default function HeaderText(
    props: PropsWithChildren<IHeaderTextProps>
): JSX.Element {
    if (props.level === 1)
        return <h1 className="header-text">{props.children}</h1>
    if (props.level === 2)
        return <h2 className="header-text">{props.children}</h2>
    if (props.level === 3)
        return <h3 className="header-text">{props.children}</h3>

    return <span className="header-text">{props.children}</span>
}
