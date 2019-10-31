import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { Account } from '../stores/account.store';

@Component({
  selector: 'app-actions',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {

  constructor(private account: Account) { }

  ngOnInit() {
  }
  deposit() {
    this.account.deposit(parseInt(window.prompt('select amount'), 10));
  }
  withdraw() {
    this.account.withdraw(parseInt(window.prompt('select amount'), 10));
  }
  clearHistory() {
    this.account.clearHistory();
  }
}
