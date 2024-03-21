import { FastifyInstance } from "fastify";
import { AuthService } from "../services/auth.js";

export default async function (fastify: FastifyInstance) {
  fastify.post("/auth/signin", async function (request, reply) {
    return AuthService.signIn()
  });

  fastify.post("/auth/signup", async function (request, reply) {  
    return AuthService.signUp()
  });
}
