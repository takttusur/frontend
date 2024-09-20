import { IMealPlanDto } from '../../shared/api/types.ts'
import { baseUrl } from '../../shared/api'

export async function getMealPlanByGuid(guid: string): Promise<IMealPlanDto> {
    const response = await fetch(baseUrl(`/MealPlan/${guid}`))
    if (!response.ok) {
        throw new Error('Cannot read Meal Plan')
    }
    const data = (await response.json()) as IMealPlanDto
    if (!data) {
        throw new Error('Cannot parse Meal Plan')
    }
    return data
}
