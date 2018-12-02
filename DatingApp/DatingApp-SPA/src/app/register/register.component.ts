import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { AuthService } from "../_services/auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  constructor(private auth: AuthService) {}
  @Input() valuesFromHome: any;
  @Output() cancelRegister = new EventEmitter<boolean>();

  model: any = {};

  ngOnInit() {}

  register() {
    this.auth.register(this.model).subscribe(
      () => {
        console.log("registration finished");
      },
      error => {
        console.log("registration error");
        console.log(error);
      }
    );
    console.log("registered");
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
