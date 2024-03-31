import { fastify, FastifyInstance } from "fastify";
import autoLoad from "@fastify/autoload";
import path from "path";
import { fileURLToPath } from "url";
import { connect } from "mongoose";
import cors from "@fastify/cors";

const dirname = path.dirname(fileURLToPath(import.meta.url));
const server: FastifyInstance = fastify();
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
