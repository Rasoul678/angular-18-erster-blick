import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateReceiptComponent } from './calculate-receipt.component';

describe('CalculateReceiptComponent', () => {
  let component: CalculateReceiptComponent;
  let fixture: ComponentFixture<CalculateReceiptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculateReceiptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculateReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
