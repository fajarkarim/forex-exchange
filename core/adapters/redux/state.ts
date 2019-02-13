import { CurrencyRate } from "../../entities"

export interface StateType {
    readonly rates: Array<CurrencyRate> | [];
}

export const initialState: StateType = {
    rates: []
};