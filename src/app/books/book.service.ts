import {Injectable} from '@angular/core';
import {Book} from './book';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import {cloneDeep, assign} from 'lodash';

@Injectable()
export class BookService {
  private books: Book[];

  constructor() {
    this.books = [];
    this.books.push(Book.from('John Example', 'Some Book'));
    this.books.push(Book.from('Joe Smith', 'Another Book'));
  }

  findAll(): Observable<Book[]> {
    return Observable.create((observer: Observer<Book[]>) => {
      observer.next(cloneDeep(this.books));
      observer.complete();
    });
  }

  findOne(id: number): Observable<Book> {
    let bookCopy: Book;
    const originalBook = this.books.find(book => book.id === id);
    if (originalBook) {
      bookCopy = cloneDeep(originalBook);
    }

    return Observable.create((observer: Observer<Book>) => {
      console.log('Observable was created.');
      if (bookCopy) {
        setTimeout( ()=> {
          observer.next(bookCopy);
          observer.complete();
          console.log('Observable was completed.');
        }, 1000);
      } else {
        observer.error(`book with id: ${id} not found`);
      }
    });
  }

  save(bookToSave: Book): Observable<Book> {
    let savedBook: Book;
    if (bookToSave.id) {
      savedBook = this.books.find(book => book.id === bookToSave.id);
      if (savedBook) {
        assign(savedBook, bookToSave);
      }
    } else {
      savedBook = Book.from(bookToSave.authors, bookToSave.title);
      this.books.push(savedBook);
    }

    return this.findOne(savedBook.id);
  }
}
