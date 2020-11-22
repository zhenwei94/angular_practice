import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';
import { JwPaginationModule } from 'jw-angular-pagination';


@NgModule({
  declarations: [
    BookComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    JwPaginationModule
  ]
})
export class BookModule { }
