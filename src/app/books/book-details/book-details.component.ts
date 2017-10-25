import { Book } from './../book';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  currentBook: Book;

  constructor() {}

  ngOnInit() {
    this.currentBook = Book.from('Robert C. Martin', 'Clean Code');
  }
}
