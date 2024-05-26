import './ScrollLayout.css'
import { PropsWithChildren } from 'react'

export default function ScrollLayout(props: PropsWithChildren): JSX.Element {
    return <div className="scroll-layout">{props.children}</div>
}
