import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { ConsoleReporter } from "jasmine";

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
}
