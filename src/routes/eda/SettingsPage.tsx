import GrayPanel from '../../components/Common/GrayPanel.tsx'
import ScrollLayout from '../../components/Common/ScrollLayout.tsx'
import SelectList, {
    ISelectListOption,
} from '../../components/Common/SelectList.tsx'
import LineInput from '../../components/Common/LineInput.tsx'
import RadioButtonsGroup from '../../components/Common/RadioButtonsGroup.tsx'
import MultiselectInput from '../../components/Common/MultiselectInput.tsx'
import HollowButton from '../../components/Common/HollowButton.tsx'
import BlueButton from '../../components/Common/BlueButton.tsx'
import "./SettingsPage.css"

function SettingsPage(): JSX.Element {
    const options: ISelectListOption[] = [
        { text: 'Ноль', value: '0' },
        { text: 'Один', value: '1' },
    ]

    return (
        <ScrollLayout>
            <GrayPanel title="Заполнение анкеты">
                <SelectList
                    title="Какой вид туризма?"
                    options={options}
                    placeholder="Укажите вид туризма"
                ></SelectList>
                <LineInput
                    title="На сколько дней в поход?"
                    placeholder="Количество дней"
                    commonMask="number"
                ></LineInput>
                <LineInput
                    title="Сколько человек идёт?"
                    placeholder="Количество человек"
                    commonMask="number"
                ></LineInput>
                <RadioButtonsGroup
                    title="Нужны ли перекусы?"
                    options={options}
                    groupName="snacks"
                    selectedOption={options[1]}
                ></RadioButtonsGroup>
                <LineInput
                    title="Сколько перекусов?"
                    placeholder="Количество перекусов в день"
                    commonMask="number"
                ></LineInput>
                <MultiselectInput
                    title="Перечислите список нежелательных продуктов"
                    options={options}
                    placeholder="Начните вводить продукты"
                ></MultiselectInput>
                <MultiselectInput
                    title="Перечислите список предпочтительных продуктов"
                    options={options}
                    placeholder="Начните вводить продукты"
                ></MultiselectInput>
                <div className="eda-settings-buttons">
                    <HollowButton title="Назад" disabled={false}/>
                    <BlueButton title="Вперёд"/>
                </div>
            </GrayPanel>
        </ScrollLayout>
    )
}

export default SettingsPage
