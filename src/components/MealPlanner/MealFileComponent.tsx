import React from 'react'
import { Button } from '@chakra-ui/react'
import { Recipe } from './Data/Recipe'

interface MealFileComponentProps {
    data: Recipe[]
    onLoad: (list: Recipe[]) => void
}

function MealFileComponent({ data, onLoad }: MealFileComponentProps) {
    const handleLoad = (event: React.ChangeEvent<HTMLInputElement>) => {
        const input = event.target

        if (!input.files || input.files.length === 0) {
            return
        }

        const file = input.files[0]
        const reader = new FileReader()

        reader.onload = (fileReaderEvent: ProgressEvent<FileReader>) => {
            try {
                const loadedData = JSON.parse(
                    fileReaderEvent.target?.result as string
                ) as { recipes: Recipe[] }

                if (Array.isArray(loadedData)) {
                    onLoad(loadedData.recipes)
                } else {
                    console.error(
                        'Invalid data format. Expected an array of Recipe.'
                    )
                }
            } catch (error) {
                console.error('Error parsing JSON file:', error)
            }
        }
        reader.readAsText(file)
    }

    const handleSave = () => {
        const content = JSON.stringify(data, null, 2)
        const blob = new Blob([content], { type: 'application/json' })

        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.style.display = 'none'
        a.href = url

        a.download = 'recipes.json'
        document.body.appendChild(a)
        a.click()
        window.URL.revokeObjectURL(url)
        document.body.removeChild(a)
    }

    return (
        <div>
            <input
                type="file"
                accept=".json"
                onChange={handleLoad}
                style={{ display: 'none' }}
                id="fileInput"
            />
            <label htmlFor="fileInput">
                <Button as="span" mr={2}>
                    Load
                </Button>
            </label>
            <Button onClick={handleSave}>Save</Button>
        </div>
    )
}

export default MealFileComponent
