import './MultiselectInput.css'
import { UserInputContainer } from './UserInputContainer.tsx'

import { ChangeEventHandler, FocusEventHandler, useState } from 'react'
import CrossIconSvg from '../../assets/cross-icon.svg'

interface IMultiselectOption {
    text: string
    value: string
}

interface IMultiselectInputProps {
    title: string
    options: IMultiselectOption[]
    placeholder: string
}

interface IMultiselectInputState {
    searchText: string
    filteredOptions: IMultiselectOption[]
    selectedOptions: IMultiselectOption[]
}

const initialState: IMultiselectInputState = {
    searchText: '',
    filteredOptions: [],
    selectedOptions: [],
}
export default function MultiselectInput(
    props: IMultiselectInputProps
): JSX.Element {
    const [state, setState] = useState<IMultiselectInputState>({
        ...initialState,
    })

    const handleSearchChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { value } = e.target
        const filteredOptions =
            value.length > 0
                ? props.options.filter((option) =>
                      option.text.toLowerCase().includes(value.toLowerCase())
                  )
                : []

        setState((prevState) => ({
            ...prevState,
            filteredOptions,
            searchText: value,
        }))
    }

    const handleBlur: FocusEventHandler<HTMLInputElement> = (e) => {
        console.log(e)
        setState((prevState) => ({
            ...prevState,
            filteredOptions: [],
            searchText: '',
        }))
    }

    const onSelect = (option: IMultiselectOption): void => {
        setState((prevState) => ({
            ...prevState,
            selectedOptions: [...prevState.selectedOptions, option],
        }))
    }

    const onRemove = (option: IMultiselectOption): void => {
        setState((prevState) => ({
            ...prevState,
            selectedOptions: prevState.selectedOptions.filter(
                (o) => o !== option
            ),
        }))
    }

    return (
        <UserInputContainer title={props.title}>
            <div className="multiselect-input-container">
                <input
                    type="text"
                    value={state.searchText}
                    placeholder="Начните вводить"
                    onChange={handleSearchChange}
                    onBlur={handleBlur}
                />
                {state.filteredOptions.length > 0 && (
                    <ul className="multiselect-input-dropdown">
                        {state.filteredOptions.map((option, index) => (
                            <li
                                key={index}
                                onMouseDown={() => onSelect(option)}
                            >
                                {option.text}
                            </li>
                        ))}
                    </ul>
                )}
                <div className="multiselect-input-selected">
                    {state.selectedOptions.map((o) => (
                        <span key={o.value}>
                            {o.text}
                            <img
                                className="multiselect-input-selected-remove"
                                src={CrossIconSvg}
                                alt="X"
                                onClick={() => onRemove(o)}
                            />
                        </span>
                    ))}
                </div>
            </div>
        </UserInputContainer>
    )
}
