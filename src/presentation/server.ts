import http from "node:http";
import { resolve } from "node:path";
import express from "express";
import type { Router } from "express";
import cors from "cors";
import helmet from "helmet";
import { SwaggerConfig } from "@/config/configSwagger";

interface ServerOptions {
  port: number;
  // publicPath?: string;
  routes: Router;
}

export class Server {
  public readonly app = express();
  private serverListener?: http.Server;

  constructor(private readonly options: ServerOptions) {}

  async start() {
    const { port, routes } = this.options;

    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));

    // CORS
    this.app.use(cors());

    // Secure
    this.app.use(helmet());

    // Swagger documentation
    const swaggerConfig = new SwaggerConfig({ resolver: resolve });
    await swaggerConfig.pathSwaggerDocs(this.app);

    // if (publicPath) {
    //   this.app.use(express.static(publicPath));
    // }

    this.app.use("/api/v1", routes);

    this.serverListener = this.app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  }

  public close() {
    this.serverListener?.close();
  }
}
