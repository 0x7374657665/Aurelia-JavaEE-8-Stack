import environment from '../environment'
import {HttpClient} from 'aurelia-http-client'

export let client = new HttpClient().configure( conf => {
    conf.withBaseUrl(environment.host)
  })