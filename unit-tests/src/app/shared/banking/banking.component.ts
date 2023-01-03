import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.scss']
})
export class BankingComponent implements OnInit {
  private savings = 10
  private balance = 50

  constructor() { }

  ngOnInit(): void {
  }

  get getSavings(): number {
    return this.savings
  }
  
  get getBalance(): number {
    return this.balance
  }

  public setWithdraw(value: string){
    if(this.savings >= Number(value)){
      this.savings -= Number(value)
      this.balance += Number(value)
    }
  }

  public setDeposit(value: string){
    if(this.balance >= Number(value)){
      this.savings += Number(value)
      this.balance -= Number(value)
    }
  }

}
