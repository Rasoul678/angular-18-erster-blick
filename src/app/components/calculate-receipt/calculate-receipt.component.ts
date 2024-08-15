import { Component, EventEmitter, inject, Output } from '@angular/core';
import { CalculatorService } from '../../services/calculator/calculator.service';

@Component({
  selector: 'calculate-receipt',
  standalone: true,
  imports: [],
  templateUrl: './calculate-receipt.component.html',
  styleUrl: './calculate-receipt.component.css',
})
export class CalculateReceiptComponent {
  private calculatorService = inject(CalculatorService);

  @Output() incrementCostEvent = new EventEmitter<number>();

  totalCost = this.calculatorService.add(50, 25);

  onClick() {
    this.totalCost++;
    this.incrementCostEvent.emit(this.totalCost);
  }
}
