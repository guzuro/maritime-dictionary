import { FastifyInstance } from "fastify";
import { AuthService } from "../services/auth.service.js";
import { SignUpData } from "maritime-contracts";

export default async function (fastify: FastifyInstance) {
  fastify.post("/auth/signin", async function (request, reply) {
    return AuthService.signIn()
  });

  fastify.post<{Body: SignUpData}>("/auth/signup", async function (request, reply) {  
    await AuthService.signUp(request.body)

    reply
    .code(201)
    .send({message: "Created!"})
  });
}
