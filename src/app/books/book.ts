export class Book {
 private _id:  number;
 private _author: string;
 private _title: string;
 
 get id() {
     return this._id;
 }

 set id(id) {
    this._id = id;
 }

 get author() {
     return this._author;
 }

 set author(author) {
     this._author = author;
 }

 get title() {
     return this._title;
 }

 set title(title) {
     this._title = title;
 }

 static from(author: string, title: string) {
     const book = new Book();
     book.title = title;
     book.author = author;
     return book;
 }
}
