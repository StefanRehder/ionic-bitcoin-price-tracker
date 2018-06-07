import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BitcoinProvider {

  private ROOT_URL =
    'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTC';

  constructor(private http: HttpClient) {
    console.log('Hello BitcoinProvider Provider');
  }

  getBitcoinPrice(currency: string) {
    return this.http.get(`${this.ROOT_URL}${currency}`)
  }

}
