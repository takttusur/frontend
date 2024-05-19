import './GrayPanel.css';

export interface GrayPanelProps {
    title: string
}

export default function GrayPanel(props: React.PropsWithChildren<GrayPanelProps>): JSX.Element {
    return <div className="gray-panel">
        <h1>{props.title}</h1>
        {props.children}
    </div>
}