import { BookDetailsComponent } from './../book-details/book-details.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookOverviewComponent } from './book-overview.component';

describe('BookOverviewComponent', () => {
  let component: BookOverviewComponent;
  let fixture: ComponentFixture<BookOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookOverviewComponent,
      BookDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select book',() => {
    // given
    const testBook = component.books[0];
    expect(component.isBookSelected(testBook)).not.toBeTruthy();
    // when
    component.selectBook(testBook);
    // then
    expect(component.selectedBook).toBe(testBook);
    expect(component.isBookSelected(testBook)).toBeTruthy();
  });
});
