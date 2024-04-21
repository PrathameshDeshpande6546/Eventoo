import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginController } from "./login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HttpClientModule } from "@angular/common/http";
import { AuthService } from "./auth.service";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { UserLoginComponent } from "./user-login/user-login.component";
import { SponserLoginComponent } from "./sponser-login/sponser-login.component";
import { SignupFormComponent } from "./signup-form/signup-form.component";
import { SponsorSignupComponent } from "./signup-sponser/signup-sponser.component";
import { EventRegistrationComponent } from "./event-ragistration/event-ragistration.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginController,
    EventRegistrationComponent,
    SponsorSignupComponent,
    HomeComponent,
    SignupFormComponent,
    HeaderComponent,
    UserLoginComponent,
    SponserLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
