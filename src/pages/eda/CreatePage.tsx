import SelectList, {
    ISelectListOption,
} from '../../components/Common/SelectList.tsx'
import LineInput from '../../components/Common/LineInput.tsx'
import RadioButtonsGroup from '../../components/Common/RadioButtonsGroup.tsx'
import MultiselectInput from '../../components/Common/MultiselectInput.tsx'
import './SettingsPage.css'
import SecondaryButton from '../../shared/ui/SecondaryButton.tsx'
import PrimaryButton from '../../shared/ui/PrimaryButton.tsx'
import ScrollLayout from '../../shared/ui/ScrollLayout.tsx'
import CardPanel from '../../shared/ui/CardPanel.tsx'

function CreatePage(): JSX.Element {
    const options: ISelectListOption[] = [
        { text: 'Ноль', value: '0' },
        { text: 'Один', value: '1' },
    ]

    return (
        <ScrollLayout>
            <CardPanel title="Заполнение анкеты">
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
                    <SecondaryButton title="Назад" disabled={false} />
                    <PrimaryButton title="Вперёд" />
                </div>
            </CardPanel>
        </ScrollLayout>
    )
}

export default CreatePage
