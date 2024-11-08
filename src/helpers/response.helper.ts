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
