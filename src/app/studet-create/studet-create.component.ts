import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Student } from '../modals/student.model';
import * as StudentActions from '../action/student.action';
import { AppState } from '../app.state';

@Component({
  selector: 'app-studet-create',
  templateUrl: './studet-create.component.html',
  styleUrls: ['./studet-create.component.css']
})
export class StudetCreateComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  addStudent(names, classs, ids, addresss) {
    const studentDetails: Student = {
      name: names,
      class: classs,
      id: ids,
      address: addresss
    };
    this.store.dispatch(new StudentActions.AddStudent(studentDetails));
  }
}
