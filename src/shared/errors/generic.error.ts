import { HttpError } from "./http.error";

export class NotFoundError extends HttpError {
  constructor(message: string) {
    super(404, message);
  }
}

export class BadRequestError extends HttpError {
  constructor(message: string) {
    super(400, message);
  }
}

export class InternalServerError extends HttpError {
  constructor(message: string) {
    super(500, message);
  }
}

export class UnauthorizedError extends HttpError {
  constructor(message: string) {
    super(401, message);
  }
}

export class ForbiddenError extends HttpError {
  constructor(message: string) {
    super(403, message);
  }
}

export class ConflictError extends HttpError {
  constructor(message: string) {
    super(409, message);
  }
}

export class PaymentRequiredError extends HttpError {
  constructor(message: string) {
    super(402, message);
  }
}

export class TooManyRequestsError extends HttpError {
  constructor(message: string) {
    super(429, message);
  }
}

export class GatewayTimeoutError extends HttpError {
  constructor(message: string) {
    super(504, message);
  }
}

export class ServiceUnavailableError extends HttpError {
  constructor(message: string) {
    super(503, message);
  }
}

export class NetworkAuthenticationRequiredError extends HttpError {
  constructor(message: string) {
    super(511, message);
  }
}
