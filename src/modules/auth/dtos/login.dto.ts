import { ErrorValidationResponse } from "@/lib/error-validation.response";
import {
  IsEmail,
  IsString,
  validateOrReject,
  ValidationError,
} from "class-validator";

export class LoginDto {
  @IsEmail()
  email!: string;

  @IsString()
  password!: string;

  static validateLoginDto = async (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any,
  ): Promise<[LoginDto, null] | [null, string[]]> => {
    try {
      const loginDto = new LoginDto();

      loginDto.email = data.email;
      loginDto.password = data.password;

      await validateOrReject(loginDto, {
        validationError: { target: false },
      });

      return [loginDto, null];
    } catch (error) {
      if (error instanceof Array) {
        const errorConstraints = error as ValidationError[];

        return [
          null,
          ErrorValidationResponse.fromClassValidatorError(errorConstraints),
        ];
      }

      const validationError = new ValidationError();
      validationError.constraints = {
        error: "Unknown error",
      };

      return [
        null,
        ErrorValidationResponse.fromClassValidatorError([validationError]),
      ];
    }
  };
}
