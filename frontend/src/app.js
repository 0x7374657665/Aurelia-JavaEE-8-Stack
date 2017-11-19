import environment from './environment'
import { HttpClient } from 'aurelia-http-client'

export class App {

  constructor() {
    this.client = new HttpClient().configure(conf => {
      conf.withBaseUrl(environment.host)
    })

    this.books = [];
    this.bookTitle = "";
  }

  activate() {
    this.client.get('book/all').then(data => {
      this.books = JSON.parse(data.response).filter(book => book.title.length > 0)

    })
  }

  addBook() {
    const book = {
      title: this.bookTitle,
      description: `Created at ${+ new Date()}`,
      status: 'OK',
      rating: -1
    }

    this.client
      .post('book', book)
      .then(
      response => {
        console.log(response)
        this.books.push({ title: this.bookTitle });
        this.bookTitle = "";
        console.log("Book List ", this.books);
      })

  }

}
