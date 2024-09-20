export interface ICommandResult {
    isSuccess: boolean
    errorCode: number
    errorMessage: string
}

export interface IKeyValueObject<TKey, TValue> {
    key: TKey
    value: TValue
}

export interface INumberKeyValueObject<TValue>
    extends IKeyValueObject<number, TValue> {}

export interface ICreateEdaDto {
    days: number
    peoplesCount: number
}

export interface IMealPlanRecordDto {
    id: number
    eatingTime: number
    amountOfPeople: number
    dateUtc: string
    recipeId: number
    recipeName: string
    timeToPrepareInSeconds: number
    timeToCookInSeconds: number
}

export interface IMealPlanDto {
    id: number
    longIdentifier: string
    revision: number
    createdAt: string
    updatedAt: string
    days: string[]
    records: IMealPlanRecordDto[]
}
