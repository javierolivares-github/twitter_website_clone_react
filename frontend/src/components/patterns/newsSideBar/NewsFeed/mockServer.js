import { Server } from 'miragejs';
import { newsCollection } from '../../../../data/newsCollection';

let server = new Server();

export const mockServer = () => {
  server.get('/api/news', {
    data: newsCollection,
  })
}