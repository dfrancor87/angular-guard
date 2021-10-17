// Angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


// Modules imports

// Components import
import { MenuComponent } from './component/menu/menu.component';
// Components array
const COMPONENTS = [
  MenuComponent
];

const MODULES = [
  CommonModule,
  BrowserModule,
  RouterModule
];


@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    ...MODULES
  ],
  exports: [
    ...COMPONENTS,
    ...MODULES
  ]
})
export class SharedModule { }
