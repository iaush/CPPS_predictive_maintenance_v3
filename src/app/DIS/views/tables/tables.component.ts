import {Component, OnInit, ViewChild} from '@angular/core';
import {DataBindingDirective, EditEvent, RemoveEvent} from '@progress/kendo-angular-grid';
import {employees} from '@dis/services/mocks/sampleDataForGrid';
import { process } from '@progress/kendo-data-query';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BehaviorSubject} from 'rxjs';
import {ToastService} from '@dis/services/message/toast.service';
import {CustomDialogService} from '@dis/services/message/custom-dialog.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  @ViewChild(DataBindingDirective)
  dataBinding: DataBindingDirective;

  public opened = false;

  gridDataSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(employees);
  gridView = this.gridDataSubject.asObservable();
  mySelection: string[] = [];
  isWindowOpened = false;
  isDialogOpen = false;
  formGroup: FormGroup;
  editedRowIndex: number;

  constructor(private toastr: ToastService, private customDialog: CustomDialogService) { }


  public close(): void {
    this.opened = false;
  }

  public open(): void {
    this.opened = true;
  }





  onFilter(inputValue: string): void {
    // Mock api call'
    const items = process(this.gridDataSubject.value, {
          filter: {
            logic: 'or',
            filters: [
              {
                field: 'full_name',
                operator: 'contains',
                value: inputValue,
              },
              {
                field: 'job_title',
                operator: 'contains',
                value: inputValue,
              },
              {
                field: 'budget',
                operator: 'contains',
                value: inputValue,
              },
              {
                field: 'phone',
                operator: 'contains',
                value: inputValue,
              },
              {
                field: 'address',
                operator: 'contains',
                value: inputValue,
              },
            ],
          },
        }).data;

    this.mockHttpRequest(items);
    this.dataBinding.skip = 0;
  }



  ngOnInit(): void {
    this.gridView.subscribe(() => {
    });
  }

  onEditClick(event: EditEvent): void {
    this.isWindowOpened = !this.isWindowOpened;

    this.formGroup = new FormGroup({
      full_name: new FormControl({value: event.dataItem.full_name, disabled: false}),
      job_title: new FormControl({value: event.dataItem.job_title, disabled: false}, Validators.required)
    });

    this.editedRowIndex = event.rowIndex;

  }

  closeWindow(): void {
    this.isWindowOpened = false;
  }

  submitWindow(item): void {

    this.isWindowOpened = false;

    // do your processing and close window
    // Retrieve backend data to update
    const items = this.gridDataSubject.value;
    items[this.editedRowIndex].full_name = item.full_name;
    items[this.editedRowIndex].job_title = item.job_title;

    // success should be in resolve of subscribe method
    this.mockHttpRequest(items);
    this.toastr.success('Your data has been updated sucessfully.');

  }

  onDeleteClick(event: RemoveEvent ): void {
    this.editedRowIndex = event.rowIndex;
    this.customDialog.confirm().subscribe(res => {
      // Primary (Yes) button is clicked
      if (res.primary){
          this.removeItem();
      }
    });
  }



  removeItem(): void {
    // do you processing and close window
    let items = this.gridDataSubject.value;
    items.splice(this.editedRowIndex, 1);

    // array isnt updating
    // Retrieve backend data to update
    const temp = [...items];
    // noinspection JSUnusedAssignment
    items = [];
    items = [...temp];

    // success should be in resolve of subscribe method
    this.mockHttpRequest(items);
    this.toastr.success('Your data has been removed sucessfully.');
  }

  mockHttpRequest(items): void {
    this.gridDataSubject.next(items);
  }

  onViewClick(dataItem): void{
    // Do some action with view
    this.toastr.info(`You have selected record:  ${dataItem.full_name}`);
  }
}
