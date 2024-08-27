import {
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  LowerCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [UpperCasePipe, LowerCasePipe, DatePipe, DecimalPipe, CurrencyPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css',
})
export class PipesComponent {
  loudMessage = 'we think you are doing great!';
  username = 'RASOUL';

  birthday = new Date(1988, 3, 7);
  number = 1234.6788;
  cost = 4560.34;
}
