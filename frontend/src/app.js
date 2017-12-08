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
      console.log('data recieved from backend:', data)
      const payload = JSON.parse(data.response)
      console.log('payload parsed as: ',payload)
      this.message = payload.message
    })
  }
}
