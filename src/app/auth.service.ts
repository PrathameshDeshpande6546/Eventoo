import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
  private admin = "admin";
  private pass = "password";
  private isAuthenticated = false;

  login(username: string, password: string): boolean {
    this.isAuthenticated = username === this.admin && password === this.pass;
    return this.isAuthenticated;
  }

  isAuthenticated1(): boolean {
    return this.isAuthenticated;
  }

  logout() {}

getHostedEvents(){

}
}
