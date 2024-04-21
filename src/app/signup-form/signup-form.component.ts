import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-signup-form",
  templateUrl: "./signup-form.component.html",
  styleUrls: ["./signup-form.component.css"],
})
export class SignupFormComponent implements OnInit {
  signupForm!: FormGroup; // Add ! to indicate that signupForm will be initialized

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      userId: ["", Validators.required],
      name: ["", Validators.required],
      phone: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      college: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log("Form submitted successfully");
      console.log(this.signupForm.value);
      // You can perform further actions here, like submitting the form data to a server
    } else {
      console.log("Form is invalid, please fill all required fields");
    }
  }
}
