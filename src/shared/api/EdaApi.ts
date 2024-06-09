import { INumberKeyValueObject } from './NumberKeyValueObject.ts'
import { ICommandResult } from './CommandResult.ts'

export interface ICreateEdaDto {
    days: number
    peoplesCount: number
}

export interface IEdaApi {
    getTourismTypes(): INumberKeyValueObject<string>[]
    postCreateEda(form: ICreateEdaDto): Promise<ICommandResult>
}
