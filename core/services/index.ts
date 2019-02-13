import { ExchangeRatesService } from "../useCases"

import { ExchangeRates } from "../useCases/exchangeRatesInteractor"

export class Services implements ExchangeRatesService {
    async exchangeRates (): Promise<Array<ExchangeRates>> {
        return Promise.resolve([
            {"USD": 2}
        ]);
    }
}