import { Component } from "@angular/core";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginController {
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
