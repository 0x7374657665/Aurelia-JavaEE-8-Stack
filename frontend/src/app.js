import {client} from './models/aurelia-http-client-preconfigured'

export class App {

  constructor() {
    this.message = 'Loading...'
  }

  activate() {
    client.get('hello').then(data => {
      const payload = JSON.parse(data.response)
      this.message = payload.message
    })
  }
}
