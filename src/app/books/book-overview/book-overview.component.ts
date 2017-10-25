import { Book } from './../book';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-overview',
  templateUrl: './book-overview.component.html',
  styleUrls: ['./book-overview.component.css']
})
export class BookOverviewComponent implements OnInit {

  fromInput : string;

  //onInput($event: any) {
  //  this.fromInput = $event.target.value;
  //}
  books: Book[] = [];

  selectedBook: Book;

  isHidden:boolean = true;

  constructor() { }

  ngOnInit() {
    this.books.push(Book.from('Robert C. Martin', 'Patterns'));
    this.books.push(Book.from('J. K. Rowling', 'Harry Potter i tajemnice Typescriptu'));
    this.books.push(Book.from('Mikołaj Kopernik', 'O obrotach sfer niebieskich'));
    this.books.push(Book.from('Mikołaj Kopernik', 'O obrotach sfer niebieskich'));
    this.books.push(Book.from('Mikołaj Kopernik', 'O obrotach sfer niebieskich'));
  }

  isBookSelected(book : Book): boolean {
    return book === this.selectedBook;
  }

  selectBook(book: Book): void {
    if(this.selectedBook === book) {
      this.selectedBook = null;
    } else {
      this.selectedBook = book;
    }
  }

}
