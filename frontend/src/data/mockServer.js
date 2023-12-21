import { Server } from "miragejs";
import { newsCollection } from './newsCollection';
import { followCollection } from './followCollection';

const server = new Server({
  routes() {
    this.namespace = '/api',
    this.get('/news', () => ({ data: newsCollection }))
    this.get('/who-to-follow', () => ({ data: followCollection }))
  }
})


export default server;
