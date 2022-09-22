import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConclusiongraphComponent } from './dashboard-three.component';
import {TranslateModule, TranslateService} from '@ngx-translate/core';

describe('ConclusiongraphComponent', () => {
  let component: ConclusiongraphComponent;
  let fixture: ComponentFixture<ConclusiongraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConclusiongraphComponent ],
      providers: [TranslateService],
      imports: [TranslateModule.forRoot()]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConclusiongraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
