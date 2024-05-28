import './RadioButtonsGroup.css'
import { UserInputContainer } from './UserInputContainer.tsx'
import RadioButtonSvg from '../../assets/radiobutton.svg'

interface RadioButtonsGroupProps {
    title: string
    groupName: string
    options: RadioButtonsGroupOption[]
    selectedOption?: RadioButtonsGroupOption
}

interface RadioButtonsGroupOption {
    text: string
    value: string
}

export default function RadioButtonsGroup(
    props: RadioButtonsGroupProps
): JSX.Element {
    return (
        <UserInputContainer title={props.title}>
            <div className="radio-buttons-container">
                {props.options.map((o) => (
                    <div className="radio-buttons-button" key={o.value}>
                        <span className="radio-buttons-mark ">
                            {o == props.selectedOption && (
                                <img src={RadioButtonSvg} alt={o.text} />
                            )}
                        </span>
                        <span className="radio-buttons-text">{o.text}</span>
                    </div>
                ))}
            </div>
        </UserInputContainer>
    )
}
