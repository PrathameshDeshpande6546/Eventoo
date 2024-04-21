import { Component } from '@angular/core';
import { AuthService} from '../auth.service';

@Component({
  selector: "app-sponser-login",

  templateUrl: "./sponser-login.component.html",
  styleUrl: "./sponser-login.component.css",
})
export class SponserLoginComponent {
  username = "";
  password = "";

  constructor(private authService: AuthService) {}

  login(): void {
    if (this.authService.login(this.username, this.password)) {
      // Redirect to admin page or show success message
    } else {
      // Show error message
    }
  }
}
