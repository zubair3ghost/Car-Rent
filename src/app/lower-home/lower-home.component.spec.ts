import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowerHomeComponent } from './lower-home.component';

describe('LowerHomeComponent', () => {
  let component: LowerHomeComponent;
  let fixture: ComponentFixture<LowerHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LowerHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LowerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
