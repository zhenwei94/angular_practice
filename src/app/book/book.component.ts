import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service'

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books;
  selectedBook;

  constructor(private bookService:BookService) { }

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe(
      data=>{
        console.log(data);
        this.books = data;
      },
      error=>{console.log(error);
      }
    )
  }

  selectBook(book){
    this.selectedBook = book;
  }
  
}
