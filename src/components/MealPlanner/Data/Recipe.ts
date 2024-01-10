export enum EatingTimes {
    BREAKFAST = 'breakfast',
    LUNCH = 'lunch',
    DINNER = 'dinner',
}

export enum MeasurementUnits {
    GRAM = 'gram',
    KILOGRAM = 'kilogram',
    UNITS = 'units',
    MILLILITERS = 'milliliters',
    LITRES = 'litres',
    PACK = 'pack',
    BOTTLE = 'bottle',
}

export enum DishType {
    STARTER = 'starter',
    MAINDISH = 'maindish',
    SNACK = 'snack',
    DESSERT = 'desert',
    BEVERAGES = 'beverages',
}

export interface Ingredient {
    name: string
    Qty: number
    Units: MeasurementUnits
}

export interface Recipe {
    id: number
    name: string
    suggestedFor: EatingTimes[]
    dishType: DishType
    ingredients: Ingredient[]
    cookingGuide: string
}
