import { BookDetailsResolver } from './book-details/book-details.resolver';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookDetailsComponent} from './book-details/book-details.component';
import {BookOverviewComponent} from './book-overview/book-overview.component';
import {FormsModule} from '@angular/forms';
import {BookService} from './book.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [BookDetailsComponent, BookOverviewComponent],
  exports: [BookDetailsComponent, BookOverviewComponent],
  providers: [BookService, BookDetailsResolver]
})
export class BooksModule {
}
