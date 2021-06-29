import { Component, OnInit } from '@angular/core';
import {CustomDialogService} from '@dis/services/message/custom-dialog.service';

@Component({
  selector: 'app-input-fields',
  templateUrl: './input-fields.component.html',
  styleUrls: ['./input-fields.component.scss']
})
export class InputFieldsComponent implements OnInit {

  constructor(private customDialog: CustomDialogService) { }

  ngOnInit(): void {
  }

  test(): void{
    this.customDialog.confirm().subscribe(res => {
      console.log(res);
    });
  }

}
