import environment from './environment'

export class App {
  constructor() {
    this.message = 'Hello World!';
    console.log(environment.host)
  }
}
