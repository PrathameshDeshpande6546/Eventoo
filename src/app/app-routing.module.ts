import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoginController } from "./login/login.component";

import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { UserLoginComponent } from "./user-login/user-login.component";
import { SponserLoginComponent } from "./sponser-login/sponser-login.component";
import { SignupFormComponent } from "./signup-form/signup-form.component";
import { SponsorSignupComponent } from "./signup-sponser/signup-sponser.component";
import { EventRegistrationComponent } from "./event-ragistration/event-ragistration.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [
  { path: "login", component: LoginController },
  { path: "sponser-signup", component: SponsorSignupComponent },
{path:"event", component:EventRegistrationComponent},
  { path: "header", component: HeaderComponent },
  { path: "home", component: HomeComponent },
  { path: "", component: HomeComponent },
  { path: "user-login", component: UserLoginComponent },
  { path: "sponser-login", component: SponserLoginComponent },
  { path: "signup-user", component: SignupFormComponent },
  {path:"dashboard" , component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
