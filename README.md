Short quick version

  nvm install v10.16.3

  nvm use
  
  npm install
  
  npm start

###What is happening?
  the magic is in src/app/stores/account.store.ts
  
  The data is an observable array of transacions,
  a transaction is a number positive or negative.
  the derived data from the transactions are 
  balance, isNegative, withdrawls, and deposits.
  Each of those functions has a decorator of @computed.
  
  The actions are in functions with @action decorator, deposit, withdrawl, clearHistory
  
  
  The store is a service you inject into your components.
  you surround your data with the *mobxAutorun directive
  
  evething just works after that checkout transactions.component.html
  
        <div *ngFor="let withdrawl of account.withdrawls">{{ withdrawl }}</div>
  just loop the computed value "withdrawls" it will print out the
  transactions that are negative and only get called when the data changes.
  
  

# NgBank

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.14.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
