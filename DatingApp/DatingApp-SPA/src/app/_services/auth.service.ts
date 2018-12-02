import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  token = "";
  baseUrl = "http://localhost:5000/api/auth/";

  constructor(private http: HttpClient) {}

  login(model: any) {
    const urlLogin = `${this.baseUrl}login`;
    return this.http.post(urlLogin, model).pipe(
      map(
        (response: any) => {
          if (response) {
            localStorage.setItem("token", response.token);
          }
        },
        (error: any) => {
          console.log(error);
        }
      )
    );
  }

  register(model: any) {
    const urlRegister = `${this.baseUrl}register`;
    return this.http.post(urlRegister, model).pipe(
      map(
        (response: any) => {
          console.log("successful registration 1: " + response);

          if (response) {
            console.log("successful registration: " + response);
          }
        },
        (error: any) => {
          console.log("error registering");
          console.log(error);
        }
      )
    );
  }
}
