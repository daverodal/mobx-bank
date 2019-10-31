import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Account } from './stores/account.store';
import { MobxAngularModule } from 'mobx-angular';

import { AppComponent } from './app.component';
import { BalanceComponent } from './balance/balance.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { ActionsComponent } from './actions/actions.component';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    BalanceComponent,
    TransactionsComponent,
    ActionsComponent
  ],
  imports: [
    BrowserModule,
    MobxAngularModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
  ],
  providers: [ Account ],
  bootstrap: [AppComponent]
})
export class AppModule { }
