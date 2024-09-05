import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../../services/services/book.service';
import { Router } from '@angular/router';
import { findAllBooks } from '../../../../services/fn/book/find-all-books';
import { PageResponseBookResponse } from '../../../../services/models/page-response-book-response';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent implements OnInit {
  bookResponse: PageResponseBookResponse = {};
  page: number = 0;
  size: number = 5;

  constructor(
    private bookService: BookService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.findAllBooks();
  }

  findAllBooks() {
    this.bookService.findAllBooks({
      page: this.page,
      size: this.size
    }).subscribe({
      next: (books: PageResponseBookResponse): void => {
        this.bookResponse = books;
      }
    })
  }

}
