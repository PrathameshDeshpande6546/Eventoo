import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-event-registration",
  templateUrl: "./event-ragistration.component.html",
  styleUrl: "./event-ragistration.component.css",
})
export class EventRegistrationComponent implements OnInit {
  eventForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.eventForm = this.fb.group({
      eventId: ["", Validators.required],
      name: ["", Validators.required],
      location: ["", Validators.required],
      startDate: ["", Validators.required],
      endDate: ["", Validators.required],
    });
  }

  onSubmit() {
    if (this.eventForm.valid) {
      console.log("Form submitted successfully");
      console.log(this.eventForm.value);
      // You can perform further actions here, like submitting the form data to a server
    } else {
      console.log("Form is invalid, please fill all required fields");
    }
  }
}
