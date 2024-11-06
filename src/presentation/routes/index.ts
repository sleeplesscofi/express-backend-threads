import { Router } from "express";
import { ApiPruebas } from "@/presentation/routes/pruebaRoute";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use("/", ApiPruebas.routes());

    return router;
  }
}
