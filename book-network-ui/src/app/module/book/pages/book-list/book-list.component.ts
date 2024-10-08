import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../../services/services/book.service';
import { Router } from '@angular/router';
import { findAllBooks } from '../../../../services/fn/book/find-all-books';
import { PageResponseBookResponse } from '../../../../services/models/page-response-book-response';
import { BookResponse } from '../../../../services/models';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent implements OnInit {
  bookResponse: PageResponseBookResponse = {};
  page: number = 0;
  size: number = 4;
  message: string = '';
  level: string = 'success';

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

  goToFirstPage() {
    this.page = 0;
    this.findAllBooks();
  }

  goToPreviousPage() {
    this.page--;
    this.findAllBooks();
  }

  goToPage(pageIndex: number) {
    this.page = pageIndex;
    this.findAllBooks();
  }

  goToNextPage() {
    this.page++;
    this.findAllBooks();
  }

  goToLastPage() {
    this.page = this.bookResponse.totalPages as number - 1;
    this.findAllBooks();
  }

  get isLastPage(): boolean {
    return this.page == this.bookResponse.totalPages as number - 1;
  }

  borrowBook(book: BookResponse) {
    this.message = '';
    this.bookService.borrowBook({
      'book-id': book.id as number
    }).subscribe({
      next: () => {
        this.level = 'success';
        this.message = 'Book added successfully to your list';
      },
      error: (err) => {
        console.log(err);
        this.level = 'error';
        this.message = err.error.error;
      }
    });
  }
}
