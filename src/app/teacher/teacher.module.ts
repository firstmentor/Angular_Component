import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsertdataComponent } from './insertdata/insertdata.component';



@NgModule({
  declarations: [InsertdataComponent],
  imports: [
    CommonModule
  ],
  exports:[
    InsertdataComponent
  ]
})
export class TeacherModule { }
