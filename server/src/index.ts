import { fastify, FastifyInstance } from 'fastify'

const server: FastifyInstance = fastify()

server.get('/ping', async (request, reply) => {
  return 'pong\n'
})

server.listen({ port: 8080 }, () => {
  console.log('running')
})
