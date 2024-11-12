import { HttpError } from "@/shared";
import type { Response, Request } from "express";

interface IResponseError {
  message: string | string[];
  statusCode: number;
  error?: string;
}

interface OptionsErrorResponse {
  statusCode: number;
  error?: string;
  message: string | string[];
}

export class ResponseHelper {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  public static createResponse(error: any, res: Response, req: Request) {
    if (error instanceof HttpError) {
      return res.status(error.statusCode).json(
        ResponseHelper.fromErrorData({
          statusCode: error.statusCode,
          message: error.message,
        }),
      );
    }

    return res.status(500).json(
      ResponseHelper.fromErrorData({
        statusCode: 500,
        message: error,
      }),
    );
  }

  public static fromErrorData(object: OptionsErrorResponse): IResponseError {
    if (object.error) {
      return {
        message: object.message,
        statusCode: object.statusCode,
        error: object.error,
      };
    }

    return {
      message: object.message,
      statusCode: object.statusCode,
    };
  }
}
