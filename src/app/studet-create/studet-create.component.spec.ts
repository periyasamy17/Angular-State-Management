import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudetCreateComponent } from './studet-create.component';

describe('StudetCreateComponent', () => {
  let component: StudetCreateComponent;
  let fixture: ComponentFixture<StudetCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudetCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudetCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
