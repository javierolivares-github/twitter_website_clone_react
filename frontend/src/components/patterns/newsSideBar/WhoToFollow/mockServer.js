import { Server } from 'miragejs';
import { followCollection } from '../../../../data/followCollection';

let server = new Server();

export const mockServer = () => {
  server.get('/api/who-to-follow', {
    data: followCollection,
  })
}