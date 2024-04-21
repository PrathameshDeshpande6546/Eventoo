import { ComponentFixture, TestBed } from "@angular/core/testing";

import { LoginController } from "./login.component";

describe("LoginComponent", () => {
  let component: LoginController;
  let fixture: ComponentFixture<LoginController>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginController],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginController);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
