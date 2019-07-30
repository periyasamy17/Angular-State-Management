import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Student } from '../modals/student.model';
import { AppState } from '../app.state';
import * as StudentAction from '../action/student.action';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  students: Observable<Student[]>;

  constructor(private store: Store<AppState>) {
    this.students = store.select('student');
  }

  removeStudent(index) {
    this.store.dispatch(new StudentAction.RemoveStudent(index));
  }

  ngOnInit() {}
}
