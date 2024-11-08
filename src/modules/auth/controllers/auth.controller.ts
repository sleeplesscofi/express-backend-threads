import { Request, Response } from "express";
import { LoginDto } from "../dtos";
import { ResponseHelper } from "@/helpers/response.helper";

export class AuthController {
  constructor() {}
  public login(req: Request, res: Response) {
    LoginDto.validateLoginDto(req.body).then(([loginDto, error]) => {
      if (error) {
        return res
          .status(400)
          .json(
            ResponseHelper.fromErrorData({ statusCode: 400, message: error }),
          );
      }

      res.status(200).json(loginDto);
    });
  }
  public register() {}
  public refreshToken() {}
  public validateToken() {}
}
