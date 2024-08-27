import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
  display = '';

  constructor() {
    this.display = this.userService.getUsers().join(' ⭐️ ');
  }

  userService = inject(UserService);

  showFramework() {
    alert(this.favoriteFramework);
  }
}
