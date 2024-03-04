import { fastify, FastifyInstance } from 'fastify'
import autoLoad from '@fastify/autoload'
import path from 'path';
import { fileURLToPath } from 'url'

const dirname = path.dirname(fileURLToPath(import.meta.url));
const server: FastifyInstance = fastify()

server.register(autoLoad, {
  dir: path.join(dirname, 'routes'),
  options: {
    prefix: '/api'
  }
});

// server.get('/ping', async (request, reply) => {
//   return 'pong\n'
// })

server.listen({ port: 8080 }, () => {
  console.log('running')
})
