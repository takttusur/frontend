import './ViewPage.css'
import ViewWidget from '../../widgets/eda-view/ViewWidget.tsx'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getMealPlanByGuid } from '../../entities/eda/eda.api.ts'

interface IViewPageParams extends Record<string, string> {
    id: string
}

export default function ViewPage(): JSX.Element {
    const params = useParams<IViewPageParams>()
    const query = useQuery({
        queryKey: ['mealPlan'],
        queryFn: () => getMealPlanByGuid(params.id!),
    })

    return <ViewWidget isLoading={query.isLoading} mealPlan={query.data} />
}
