import { Server } from "miragejs";
import { newsCollection } from './newsCollection';

const server = new Server({
  routes() {
    this.namespace = '/api',
    this.get('/news', () => ({ data: newsCollection }))
  }
})


export default server;
