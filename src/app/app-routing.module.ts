import { BookDetailsResolver } from './books/book-details/book-details.resolver';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { BookOverviewComponent } from './books/book-overview/book-overview.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: 'book-app/book-overview', pathMatch: 'full'},
    {path: 'book-app', children: [
      {path: 'book-overview', component: BookOverviewComponent},
      {path: 'book-details', component: BookDetailsComponent},
      {path: 'book-details/:id', component: BookDetailsComponent, resolve: {
        book: BookDetailsResolver
      }}
    ]}
  ];