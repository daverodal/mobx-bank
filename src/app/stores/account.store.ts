import { Injectable } from '@angular/core';
import { observable, autorun, computed, action, configure } from 'mobx';
import { sum } from 'lodash';


configure({
  enforceActions: true
});

@Injectable()
export class Account {
  @observable transactions: number[] = [];
  @observable sillyNames: string[] = [];

  constructor() {
    console.log('State constructor loaded transactions from localStorage');
    if (localStorage.savedTransactions) {
      this.transactions = JSON.parse(localStorage.savedTransactions);
    }
    autorun(() => {
      console.log('A Transaction occured, all transactions saved');
      localStorage.savedTransactions = JSON.stringify(this.transactions);
    });
  }

  @action clearHistory(){
    localStorage.savedTransactions = '';
    this.transactions = [];
  }
  @computed get balance(): number {
    return sum(this.transactions);
  }

  @computed get isNegative(): boolean {
    return this.balance < 0;
  }

  @computed get deposits(): number[] {
    return this.transactions.filter((t) => t >= 0);
  }

  @computed get withdrawls(): number[] {
    return this.transactions.filter((t) => t < 0);
  }

  @action deposit(money: number) {
    if (money) {
      this.transactions = [...this.transactions, money];
    }
  }
  @action withdraw(money: number) {
    if (money) {
      this.transactions = [...this.transactions, -money];
    }
  }
}
