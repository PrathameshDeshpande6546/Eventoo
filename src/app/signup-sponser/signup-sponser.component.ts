import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-sponsor-signup",
  templateUrl: "./signup-sponser.component.html",
  styleUrl: "./signup-sponser.component.css",
})
export class SponsorSignupComponent implements OnInit {
  sponsorForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.sponsorForm = this.fb.group({
      sponsorId: ["", Validators.required],
      name: ["", Validators.required],
      description: ["", Validators.required],
      phone: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.sponsorForm.valid) {
      console.log("Form submitted successfully");
      console.log(this.sponsorForm.value);
      // You can perform further actions here, like submitting the form data to a server
    } else {
      console.log("Form is invalid, please fill all required fields");
    }
  }
}
