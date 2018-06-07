import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Bitcoin } from '../../models/bitcoin.model';

@Injectable()
export class BitcoinProvider {

  private ROOT_URL =
    'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTC';

  constructor(private http: HttpClient) {
    console.log('Hello BitcoinProvider Provider');
  }

  public getBitcoinPrice(currency: string) {
    return this.http.get<Bitcoin>(`${this.ROOT_URL}${currency}`)
  }

}
