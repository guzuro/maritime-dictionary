import ApiError from "./exceptions/ApiError.js";

import autoLoad from "@fastify/autoload";
import { fileURLToPath } from "url";
import { connect } from "mongoose";
import cors from "@fastify/cors";
import { fastify, FastifyInstance } from "fastify";
import path from "path";

const dirname = path.dirname(fileURLToPath(import.meta.url));

const server: FastifyInstance = fastify({
  logger: true
});

server.setErrorHandler((error, request, reply) => {
  const statusCode = error instanceof ApiError ? error.statusCode : 500;

  reply.code(statusCode).send({ message: error.message });
});

await server.register(cors, {
  origin: "*"
});

connect("mongodb://127.0.0.1:27017/maritime_dict_db");

server.register(autoLoad, {
  dir: path.join(dirname, "routes"),
  options: {
    prefix: "/api"
  }
});

server.listen({ port: 8080 }, () => {
  console.log("running");
});
