import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarService } from '../../services/car/car.service';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  username = 'Rasoul';
  favoriteFramework = '';
  usersDisplay = '';
  carsDisplay = '';

  constructor(private carService: CarService) {
    this.usersDisplay = this.userService.getUsers().join(' ⭐️ ');
    this.carsDisplay = this.carService.getCars().join(' ⭐️ ');
  }

  userService = inject(UserService);

  showFramework() {
    alert(this.favoriteFramework);
  }
}
