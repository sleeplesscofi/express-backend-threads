import { resolve } from "node:path";
import { Express } from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

interface PathResolver {
  resolver: (...paths: string[]) => string;
}

export class SwaggerConfig {
  public readonly swaggerDefinition;

  constructor(private readonly options: PathResolver) {
    this.swaggerDefinition = {
      openapi: "3.0.0",
      info: {
        title: "API para la gestión del backend del clon de Threads",
        version: "1.0.0",
        description:
          "Esta API proporciona los endpoints necesarios para gestionar la funcionalidad del backend del clon de la red social Threads. Permite manejar usuarios, publicaciones, interacciones y otras características esenciales para la operativa de la plataforma.",
      },
    };
  }

  async pathSwaggerDocs(app: Express): Promise<void> {
    const options: swaggerJsdoc.Options = {
      definition: this.swaggerDefinition,
      apis: [resolve(__dirname, "../presentation/routes/*.ts")],
    };

    const swaggerDocument = swaggerJsdoc(options);

    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  }
}
