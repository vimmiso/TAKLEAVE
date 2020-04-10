import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';



@NgModule({
  declarations: [PagenotfoundComponent],
  imports: [
    CommonModule
  ],
  exports:[
    PagenotfoundComponent
  ]
})
export class SharedModule { }
