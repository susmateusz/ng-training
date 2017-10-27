import {Component, OnInit} from '@angular/core';
import {Book} from '../book';
import {assign} from 'lodash';
import {BookService} from '../book.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './book-overview.component.html',
  styleUrls: ['./book-overview.component.scss']
})
export class BookOverviewComponent implements OnInit {
  public books: Book[];
  public selectedBook: Book;

  constructor(private bookService: BookService, private router: Router) {
    this.books = [];
  }

  isBookSelected(book: Book): boolean {
    return this.selectedBook === book;
  }

  selectBook(book: Book): void {
    this.router.navigate(['book-app','book-details', book.id]);
  }

  onBookUpdate(updatedBook: Book): void {
    const bookToUpdate = this.books.find((currentBook: Book) => {
      return currentBook.id === updatedBook.id;
    });
    if (bookToUpdate) {
      assign(bookToUpdate, updatedBook);
    }
  }

  ngOnInit() {
    this.bookService.findAll().subscribe({
      next: (books) => {
        this.books = books;
      }
    });
  }

}
