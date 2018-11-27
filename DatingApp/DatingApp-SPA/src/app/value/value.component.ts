import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {

  values: any;
  appDatingValuesURL = 'http://localhost:5000/api/values';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getValues();
  }

  getValues() {
    this.http.get(this.appDatingValuesURL).subscribe(
      (response) => {
        this.values = response;
        console.log(response); },
      (errors) => {
        console.log('--- errors ---');
        console.log(errors); });
  }

}
