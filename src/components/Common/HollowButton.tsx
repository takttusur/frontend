import './HollowButton.css';

interface HollowButtonProps {
    title: string
}

export default function HollowButton(props: HollowButtonProps) : JSX.Element {
    return <button className='hollow-button'>{props.title}</button>
}