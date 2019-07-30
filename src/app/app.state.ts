import { Student } from './modals/student.model';

export interface AppState {
  readonly student: Student[];
}
