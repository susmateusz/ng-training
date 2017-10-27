import { BookService } from './../book.service';
import { Observable } from 'rxjs/Observable';
import { Book } from './../book';
import { Injectable } from '@angular/core';
import { BookDetailsComponent } from './book-details.component';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import 'rxjs/add/observable/of';

@Injectable()
export class BookDetailsResolver implements Resolve<Observable<Book>> {
    
    resolve(route: ActivatedRouteSnapshot): Observable<Book>  {
        const bookId = parseInt(route.params['id'], 10);
        return this.bookService.findOne(bookId);
    }

    constructor(private router: Router, private bookService: BookService){}
}