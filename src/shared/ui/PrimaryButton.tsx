import './PrimaryButton.css'
import { Link, LinkProps } from 'react-router-dom'

interface IPrimaryButtonProps {
    title: string
    reactLink?: LinkProps
}

export default function PrimaryButton(props: IPrimaryButtonProps): JSX.Element {
    return props.reactLink ? (
        <Link {...props.reactLink} className="button button_primary">
            {props.title}
        </Link>
    ) : (
        <button className="button button_primary">{props.title}</button>
    )
}
