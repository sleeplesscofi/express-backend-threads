import http from "node:http";

import express from "express";
import type { Router } from "express";
import cors from "cors";
import helmet from "helmet";

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
