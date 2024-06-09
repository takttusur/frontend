import './PrimaryButton.css'
import { Link, LinkProps } from 'react-router-dom'

interface IPrimaryButtonProps {
    title: string
    reactLink?: LinkProps
    onClick?: () => void
    disabled?: boolean
}

export default function PrimaryButton(props: IPrimaryButtonProps): JSX.Element {
    const className = 'button button_primary'
    return props.reactLink && props.disabled !== true ? (
        <Link {...props.reactLink} className={className}>
            {props.title}
        </Link>
    ) : (
        <button
            className={className}
            disabled={!props.onClick || props.disabled === true}
            onClick={() => props.onClick?.()}
        >
            {props.title}
        </button>
    )
}
