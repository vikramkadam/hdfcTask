import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoneComponent } from './fone/fone.component';
import { FtwoComponent } from './ftwo/ftwo.component';



@NgModule({
  declarations: [
    FoneComponent,
    FtwoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FoneComponent,
    FtwoComponent
  ]
})
export class FeatursModule { }
