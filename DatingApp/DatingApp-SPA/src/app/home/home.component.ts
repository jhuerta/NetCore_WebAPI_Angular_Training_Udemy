import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient) {}
  values: any;
  appDatingValuesURL = "http://localhost:5000/api/values";

  registerMode = false;

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  getValues() {
    this.http.get(this.appDatingValuesURL).subscribe(
      response => {
        this.values = response;
      },
      errors => {
        console.error(errors);
      }
    );
  }

  cancelRegisterMode(registerMode) {
    console.log("registerMode");
    console.log(registerMode);
    this.registerMode = registerMode;
  }

  ngOnInit() {
    this.getValues();
  }
}
