import { Server } from "miragejs";
import { newsCollection } from './newsCollection';
import { usersCollection } from './usersCollection';
import { tweetCollection } from './tweetCollection';
import { profile } from './profile';

const server = new Server({
  routes() {
    this.namespace = '/api'
    this.get('/news', () => ({ data: newsCollection }))
    this.get('/users', () => ({ data: usersCollection }))
    this.get('/profile', () => ({ data: profile }))
    this.get('/tweets', () => ({ data: tweetCollection }))
  }
})


export default server;
