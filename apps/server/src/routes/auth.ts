import { AuthService } from "../services/auth.service.js";
import { SignInData, SignUpData } from "maritime-contracts";
import { FastifyInstance } from "fastify";

export default async function (fastify: FastifyInstance) {
  fastify.post<{ Body: SignInData }>("/auth/signin", async function (request, reply) {
    const res = await AuthService.signIn(request.body);

    if (res) {
      reply.code(200).send(res);
    } else {
      reply.code(404).send({ message: "User not found" });
    }
  });

  fastify.post<{ Body: SignUpData }>("/auth/signup", async function (request, reply) {
    await AuthService.signUp(request.body);

    reply.code(201).send({ message: "User created" });
  });
}
