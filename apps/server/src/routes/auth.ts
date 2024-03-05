import { FastifyInstance } from "fastify";

export default async function (fastify: FastifyInstance) {
  fastify.get("/auth/signin", async function (request, reply) {
    return "/auth/login";
  });

  fastify.get("/auth/signup", async function (request, reply) {
    return "/auth/signup";
  });
}
