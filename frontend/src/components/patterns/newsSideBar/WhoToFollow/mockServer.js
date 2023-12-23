import { Server } from 'miragejs';
import { usersCollection } from '../../../../data/usersCollection';

let server = new Server();

export const mockServer = () => {
  server.get('/api/users', {
    data: usersCollection,
  })
}