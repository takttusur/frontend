import GrayPanel from '../../components/Common/GrayPanel.tsx'
import ScrollLayout from '../../components/Common/ScrollLayout.tsx'
import SelectList, {
    ISelectListOption,
} from '../../components/Common/SelectList.tsx'
import LineInput from '../../components/Common/LineInput.tsx'

function SettingsPage(): JSX.Element {
    const options: ISelectListOption[] = [
        { text: 'Ноль', value: '0' },
        { text: 'Один', value: '1' },
        { text: 'Два', value: '2' },
        { text: 'Три', value: '3' },
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
            </GrayPanel>
        </ScrollLayout>
    )
}

export default SettingsPage
