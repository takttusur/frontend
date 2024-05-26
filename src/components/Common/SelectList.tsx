import './SelectList.css'
import Select, {
    DropdownIndicatorProps,
    components,
    PlaceholderProps,
} from 'react-select'
import { UserInputContainer } from './UserInputContainer.tsx'

export interface ISelectListProps {
    title: string
    placeholder: string
    options?: ISelectListOption[]
}

export interface ISelectListOption {
    text: string
    value: string
}

const SvgIcon = (): JSX.Element => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
    >
        <path
            d="M19 9L12 16L5 9"
            stroke="#3D3D3D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

const DropdownIndicator = (props: DropdownIndicatorProps): JSX.Element => {
    return (
        <components.DropdownIndicator {...props}>
            <SvgIcon />
        </components.DropdownIndicator>
    )
}

export default function SelectList(props: ISelectListProps): JSX.Element {
    const options = props.options?.map((x) => ({
        label: x.text,
        value: x.value,
    }))

    const Placeholder = (placeholderProps: PlaceholderProps): JSX.Element => {
        return (
            <components.Placeholder {...placeholderProps}>
                {props.placeholder}
            </components.Placeholder>
        )
    }

    return (
        <UserInputContainer title={props.title}>
            <Select
                options={options}
                components={{
                    DropdownIndicator,
                    IndicatorSeparator: undefined,
                    Placeholder,
                }}
            ></Select>
        </UserInputContainer>
    )
}
