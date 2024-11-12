import { Request, Response } from "express";
import { LoginDto } from "../dtos";
import { ResponseHelper } from "@/helpers/response.helper";
import type { AuthService } from "../services/auth.service";
import { RegisterDto } from "../dtos/register.dto";

export class AuthController {
  constructor(private readonly authService: AuthService) {}

  public login = (req: Request, res: Response) => {
    LoginDto.validate(req.body).then(([loginDto, error]) => {
      if (error) {
        return res
          .status(400)
          .json(
            ResponseHelper.fromErrorData({ statusCode: 400, message: error }),
          );
      }

      this.authService
        .login(loginDto)
        .then((user) => {
          return res.status(200).json(user);
        })
        .catch((error) => ResponseHelper.createResponse(error, res, req));
    });
  };

  public register = async (req: Request, res: Response) => {
    RegisterDto.validate(req.body).then(([registerDto, error]) => {
      if (error) {
        return res
          .status(400)
          .json(
            ResponseHelper.fromErrorData({ statusCode: 400, message: error }),
          );
      }

      this.authService
        .register(registerDto)
        .then((userLogged) => {
          return res.status(200).json(userLogged);
        })
        .catch((error) => ResponseHelper.createResponse(error, res, req));
    });
  };

  public refreshToken() {}

  public validateToken() {}
}
