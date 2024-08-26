import { Component } from '@angular/core';
import { CalculateReceiptComponent } from '../calculate-receipt/calculate-receipt.component';
import { SignUpForm } from '../sign-up-form/sign-up-form.component';
import { UserControls } from '../user-controls/user-controls.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SignUpForm, UserControls, CalculateReceiptComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  cost = 0;

  increment(newCost: number) {
    this.cost = newCost;
  }
}
