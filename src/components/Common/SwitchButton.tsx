import './SwitchButton.css'
import { PropsWithoutRef } from 'react'

export interface ISwitchButtonOptions {
    text: string
    value: string
}

export interface ISwitchButtonProps {
    options: ISwitchButtonOptions[]
    selectedValue?: ISwitchButtonOptions
    onChange?: (o: ISwitchButtonOptions) => void
}

export default function SwitchButton(
    props: PropsWithoutRef<ISwitchButtonProps>
): JSX.Element {
    return (
        <div className="switch-button">
            {props.options.map((o) => (
                <div
                    key={o.value}
                    className={
                        'switch-button-segment ' +
                        (props.selectedValue === o ? 'selected' : '')
                    }
                    onClick={() => props.onChange?.(o)}
                >
                    {o.text}
                </div>
            ))}
        </div>
    )
}
