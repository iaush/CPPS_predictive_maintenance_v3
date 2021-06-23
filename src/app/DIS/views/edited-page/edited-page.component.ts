import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-edited-page',
  templateUrl: './edited-page.component.html',
  styleUrls: ['./edited-page.component.scss']
})
export class EditedPageComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onButtonClick(): void {
    this.http.get('http://localhost:3000/posts').subscribe(res => {
      console.log(res);
    });
  }

}
