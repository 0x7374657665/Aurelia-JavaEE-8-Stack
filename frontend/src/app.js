import environment from './environment'
import {HttpClient} from 'aurelia-http-client'

export class App {

  constructor() {
    this.client = new HttpClient().configure( conf => {
      conf.withBaseUrl(environment.host)
    })

    this.message = 'Loading...'
  }

  activate() {
    this.client.get('hello').then(data => {
      const payload = JSON.parse(data.response)
      this.message = payload.message
    })
  }
}
