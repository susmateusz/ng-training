import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookDetailsComponent } from './book-details/book-details.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    BookDetailsComponent
  ],
  declarations: [BookDetailsComponent]
})
export class BooksModule { }
