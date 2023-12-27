import { Server } from 'miragejs';
import { profile } from '../../../../data/profile';

let server = new Server();

export const mockServer = () => {
  server.get('/api/profile', profile)
}