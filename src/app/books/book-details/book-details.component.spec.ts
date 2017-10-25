import { Book } from './../book';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailsComponent } from './book-details.component';

describe('BookDetailsComponent Tests:', () => {
  let component: BookDetailsComponent;
  let fixture: ComponentFixture<BookDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailsComponent);
    component = fixture.componentInstance;
    component.book = Book.from('Test author', 'test title');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize book', () => {
    const book = component.book;
    expect(book.author).toEqual('Test author');
  });
  
});
