import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BitcoinPage } from './bitcoin';
import { BitcoinProvider } from '../../providers/bitcoin/bitcoin';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    BitcoinPage,
  ],
  imports: [
    IonicPageModule.forChild(BitcoinPage), HttpClientModule
  ],
  providers: [BitcoinProvider]
})
export class BitcoinPageModule {}
