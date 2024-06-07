import './FlexLayout.css'
import { PropsWithChildren } from 'react'

export interface IFlexLayoutProps {
    className?: string
}

export default function FlexLayout(
    props: PropsWithChildren<IFlexLayoutProps>
): JSX.Element {
    let className = 'flex-layout'
    className += ' flex-layout_column'
    className += ' flex-layout_justify-content_center'
    className += ' flex-layout_align-items_center'

    if (props.className) className += ' ' + props.className

    return <div className={className}>{props.children}</div>
}
