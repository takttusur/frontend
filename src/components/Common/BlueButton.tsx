import './BlueButton.css';

interface BlueButtonProps {
    title: string
}

export default function BlueButton(props: BlueButtonProps) : JSX.Element {
    return <button className='blue-button'>{props.title}</button>
}