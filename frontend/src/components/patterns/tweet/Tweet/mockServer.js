import { Server } from 'miragejs';
import { tweetCollection } from '../../../../data/tweetCollection';

let server = new Server();

export const mockServer = () => {
  server.get('/api/tweets', {
    data: tweetCollection,
  })
}