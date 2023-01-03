import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { MOCK_LIST } from '../../services/list-investments.mock';
import { ListInvestmentsService } from '../../services/list-investments.service';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let service: ListInvestmentsService

  const mockList = MOCK_LIST

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    service = TestBed.inject(ListInvestmentsService)
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(U) should list investments', () => {
    let investments = component.investments
    spyOn(service, 'list').and.returnValue(of(mockList))

    component.ngOnInit()
    fixture.detectChanges()

    expect(service.list).toHaveBeenCalledWith()
    expect(component.investments.length).toEqual(5)
    // expect(investments.length).toEqual(4)
    // expect(investments[0].name).toEqual('Itaú')
  })

  it('(I) should list investments', () => {
    let investments = fixture.debugElement.nativeElement.querySelectorAll('.list-itens')

    expect(investments.length).toBe(4)
    expect(investments[0].textContent).toContain('Itaú')
  })
});
