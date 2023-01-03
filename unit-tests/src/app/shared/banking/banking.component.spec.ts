import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingComponent } from './banking.component';

describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(U) getSavings(): should return 10', () => {
    expect(component.getSavings).toEqual(10)
  })

  it('(U) getBalance(): should return 50', () => {
    expect(component.getBalance).toEqual(50)
  })

  it('(U) setWithdraw(): should transfer from savings to balance', () => {
    component.setWithdraw('10')

    expect(component.getSavings).toEqual(0)
    expect(component.getBalance).toEqual(60)
  })

  it('(U) setDeposit(): should transfer from balance to savings', () => {
    component.setDeposit('10')

    expect(component.getSavings).toEqual(20)
    expect(component.getBalance).toEqual(40)
  })
});
