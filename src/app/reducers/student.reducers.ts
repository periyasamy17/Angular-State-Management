import { Action } from '@ngrx/store';
import { Student } from '../modals/student.model';
import * as StudentAction from '../action/student.action';

const initialState: Student = {
  name: 'peri',
  addess: 'Chennai',
  id: 1,
  class: 'LKG'
};

export function reducer(
  state: Student[] = [initialState],
  action: StudentAction.StudentAction
) {
  switch (action.type) {
    case StudentAction.ADD_STUDENT:
      return [...state, action.payload];
    case StudentAction.REMOVE_STUDENT:
      state.splice(action.payload, 1);
      return state;
    default:
      return state;
  }
}
