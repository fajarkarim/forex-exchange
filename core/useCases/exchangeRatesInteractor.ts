import { CurrencyRate } from "../entities"

export interface ExchangeRatesService {
    getRates: () => Promise<CurrencyRate>;
}

export class ExchangeRatesInteractor {
    exchangeRatesService: ExchangeRatesService;

    constructor (exchangeRatesService: ExchangeRatesService) {
        this.exchangeRatesService = exchangeRatesService
    }

    async rates(): Promise<CurrencyRate> {
        return this.exchangeRatesService.getRates();
    }
}