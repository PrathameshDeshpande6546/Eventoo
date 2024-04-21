import { Component } from "@angular/core";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-user-login",

  templateUrl: "./user-login.component.html",
  styleUrl: "./user-login.component.css",
})
export class UserLoginComponent {
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
