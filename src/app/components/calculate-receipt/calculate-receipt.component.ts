import { Component, inject } from '@angular/core';
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

  totalCost = this.calculatorService.add(50, 25);
}
