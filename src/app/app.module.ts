import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { reducer } from './reducers/student.reducers';
import { ReadComponent } from './read/read.component';
import { StudetCreateComponent } from './studet-create/studet-create.component';

@NgModule({
  declarations: [AppComponent, ReadComponent, StudetCreateComponent],
  imports: [
    BrowserModule,

    StoreModule.forRoot({
      student: reducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
