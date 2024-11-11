import { Request, Response } from "express";
import { LoginDto } from "../dtos";
import { ResponseHelper } from "@/helpers/response.helper";
import type { AuthService } from "../services/auth.service";

export class AuthController {
  constructor(private readonly authService: AuthService) {}
  public login(req: Request, res: Response) {
    LoginDto.validateLoginDto(req.body).then(([loginDto, error]) => {
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
        .catch((error) => {
          return res.status(500).json(
            ResponseHelper.fromErrorData({
              statusCode: 500,
              message: error,
            }),
          );
        });
    });
  }
  public register() {}
  public refreshToken() {}
  public validateToken() {}
}
