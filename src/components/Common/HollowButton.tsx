import './HollowButton.css'

interface HollowButtonProps {
    title: string
    disabled: boolean
    profile: 'low' | 'high'
}

export default function HollowButton(props: HollowButtonProps): JSX.Element {
    let buttonClass = 'hollow-button'
    if (props.profile === 'low') {
        buttonClass += ' hollow-button-low'
    } else if (props.profile === 'high') {
        buttonClass += ' hollow-button-high'
    }
    return (
        <button className={buttonClass} disabled={props.disabled}>
            {props.title}
        </button>
    )
}
