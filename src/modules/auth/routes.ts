import { Router } from "express";
import { AuthController } from "./controllers/auth.controller";
import { AuthService } from "./services/auth.service";

export class AuthRoutes {
  static get routes(): Router {
    const router = Router();

    const authService = new AuthService();

    const authController = new AuthController(authService);

    router.post("/login", authController.login);
    router.post("/sign-up", authController.register);

    return router;
  }
}
