import './SecondaryButton.css'

interface ISecondaryButtonProps {
    title: string
    disabled?: boolean
    profile?: 'small' | 'normal'
    onClick?: () => void
}

export default function SecondaryButton(
    props: ISecondaryButtonProps
): JSX.Element {
    let buttonClass = 'button button_secondary'

    switch (props.profile) {
        case 'small':
            buttonClass += ' button_size_small'
            break
        default:
            buttonClass += ' button_size_normal'
    }

    return (
        <button
            className={buttonClass}
            disabled={!props.onClick || props.disabled}
            onClick={() => props.onClick?.()}
        >
            {props.title}
        </button>
    )
}
