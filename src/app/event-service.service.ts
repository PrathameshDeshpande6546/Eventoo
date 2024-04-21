// event.service.ts
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class EventService {
  private apiUrl = "https://example.com/api/events"; // Replace this with your API endpoint

  constructor(private http: HttpClient) {}

  // Method to fetch hosted events from the backend
  getHostedEvents(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/hosted`);
  }

  // Method to create a new event
  createEvent(eventData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create`, eventData);
  }

  // Add more methods as needed for your application, like updating or deleting events
}
