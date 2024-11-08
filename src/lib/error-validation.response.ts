import { ValidationError } from "class-validator";

export class ErrorValidationResponse {
  static fromClassValidatorError(error: ValidationError[] | null): string[] {
    if (!error) {
      return ["Unknown error"];
    }

    return error
      .map((err) => {
        if (err.constraints) {
          return Object.values(err.constraints);
        }

        return ["Unknown error"];
      })
      .flat();
  }
}
