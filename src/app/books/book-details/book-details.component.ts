import { BookService } from './../book.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, Input, EventEmitter, Output, OnInit, ViewChild } from '@angular/core';
import { Book } from '../book';
import { cloneDeep } from 'lodash';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  private _book: Book = new Book();

  @ViewChild('bookForm')
  private bookForm: NgForm;

  get book(): Book {
    return this._book;
  }

  set book(book: Book) {
    this._book = book;
  }

  constructor(private router: Router, private route: ActivatedRoute, private bookService: BookService) {
  }

  navigateToEmptyBookDetails(): void {
    this.router.navigate(['book-app','book-details']);
  }
  
  ngOnInit(): void {
    this.route.data.subscribe({
      next: (data) => {
        if(data.book) {
          this.book = data.book;
        } else {
          this.book = new Book();
        }
      }
    });
  }

  apply(): void {
    if(this.bookForm.valid){
      this.bookService.save(this.book).subscribe({
        next: () => this.router.navigate(['book-app', 'book-overview'])
      });
    }
    
  }

  isFieldInvalid(fieldname: string): boolean {
    if(this.bookForm) {
      const field = this.bookForm.form.get(fieldname);
      if(field && field.invalid && (field.touched || this.bookForm.submitted)) {
        return true;
      }
    }
    return false;
  }

  getErrorMessages(fieldname: string): string {
    if(this.isFieldInvalid(fieldname)) {
      const field = this.bookForm.form.get(fieldname);
      return Object.keys(field.errors).map(error => {
        if(error === 'required') {
          return 'this field is required';
        }
        if (error === 'minlength') {
          return 'value too short';
        }
      }).join(' ');
    }
    return '';
  }
}
