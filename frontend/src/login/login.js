import {client} from '../models/aurelia-http-client-preconfigured'

export class Login {
    constructor() {
        this.username = ''
        this.password = ''
    }

    login() {
        let credentials = {
            username: this.username,
            password: this.password
        }

        console.log('login attempted:',credentials)

        client
        .post('login',credentials)
        .then(response => console.log('login result:',response))
    }
}