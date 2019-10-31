import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { Account } from '../stores/account.store';

@Component({
  selector: 'app-transactions',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  constructor(private account: Account) { }

  ngOnInit() {
  }

}
