import './PrimaryButton.css'

interface IPrimaryButtonProps {
    title: string
}

export default function PrimaryButton(props: IPrimaryButtonProps): JSX.Element {
    return <button className="button button_primary">{props.title}</button>
}
