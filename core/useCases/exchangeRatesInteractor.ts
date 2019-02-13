import { CurrencyRate } from "../entities"

/**
 * list of exchange rates from api
 */
export interface ExchangeRates {
    [key: string]: number;
}

export interface ExchangeRatesService {
    exchangeRates: () => Promise<Array<ExchangeRates>>;
}

/**
 * Interactor to get all exchange rates from api
 * to add currency and remove currency
 */

export class ExchangeRatesInteractor {
    exchangeRatesService: ExchangeRatesService;
    _rates: Array<CurrencyRate>;    

    constructor (exchangeRatesService: ExchangeRatesService) {
        this.exchangeRatesService = exchangeRatesService;
        this._rates = []        
    }

    async exchangeRates(): Promise<Array<ExchangeRates>> {
        return this.exchangeRatesService.exchangeRates();
    }

    add (currency: CurrencyRate) {
        let currencyRates = new Set(this._rates);
        currencyRates.add(currency);
        this._rates = [...currencyRates]
    }

    remove (currency: CurrencyRate) {
        let currencyRates = new Set(this._rates);
        currencyRates.delete(currency);
        this._rates = [...currencyRates]
    }

    get rates () {
        return this._rates
    }
}