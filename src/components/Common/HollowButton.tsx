import './HollowButton.css'

interface HollowButtonProps {
    title: string
    disabled: boolean
}

export default function HollowButton(props: HollowButtonProps): JSX.Element {
    return (
        <button className="hollow-button" disabled={props.disabled}>
            {props.title}
        </button>
    )
}
