import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service'
import {Book} from '../models/Book'

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books:Array<any>;
  pageOfItems: Array<any>;
  selectedBook;

  constructor(private bookService:BookService) { }

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe(
      (data:Array<Book>)=>{
        console.log(data);
        this.books = data;
        console.log(this.books);
        
      },
      error=>{console.log(error);
      }
    )

    
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}

  selectBook(book){
    this.selectedBook = book;
  }
  
}
