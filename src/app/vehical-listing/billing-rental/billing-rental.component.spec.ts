import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingRentalComponent } from './billing-rental.component';

describe('BillingRentalComponent', () => {
  let component: BillingRentalComponent;
  let fixture: ComponentFixture<BillingRentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillingRentalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillingRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
