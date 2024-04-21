// dashboard.component.ts
import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service"; // Assuming you have an AuthService for handling authentication
import { EventService } from "../event-service.service";// Assuming you have an EventService for fetching event data

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  hostedEvents: any[] = [];

  constructor(
    private authService: AuthService,
    private EventService: EventService,
   
  ) {}

  ngOnInit(): void {
    // Fetch user details
    // Assuming you have a method to fetch hosted events from the backend service
    this.EventService.getHostedEvents().subscribe((events: any[]) => {
      this.hostedEvents = events;
    });
  }

  createEvent() {
    // Logic for creating a new event
  }

  logout() {
    this.authService.logout(); // Assuming you have a logout method in your AuthService
  }
}
