import { AuthRoutes } from "@/modules/auth/routes";
import { Router } from "express";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use("/auth", AuthRoutes.routes);

    return router;
  }
}
