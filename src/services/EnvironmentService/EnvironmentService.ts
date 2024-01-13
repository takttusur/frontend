import { IEnvironmentService } from './IEnvironmentService.ts'

const env = import.meta.env
export default class EnvironmentService implements IEnvironmentService {
    public readonly YandexMetrikaEnabled: boolean =
        (env.VITE_YANDEX_METRIKA_ENABLED as string)?.toLowerCase() === 'true'

    public readonly YandexMetrikaId: string =
        (env.VITE_YANDEX_METRIKA_ID as string) ?? ''

    public constructor() {}
}
