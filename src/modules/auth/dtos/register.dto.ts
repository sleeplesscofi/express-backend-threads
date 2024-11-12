import { ErrorValidationResponse } from "@/lib/error-validation.response";
import {
  IsDateString,
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
  validateOrReject,
  ValidationError,
} from "class-validator";

export class RegisterDto {
  @IsString()
  username!: string;

  @IsEmail()
  email!: string;

  @IsString()
  phone!: string;

  @IsString()
  @MinLength(6)
  @MaxLength(50)
  @Matches(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: "password must have a Uppercase, lowercase letter and a number",
  })
  password!: string;

  @IsString()
  description!: string;

  @IsString()
  firstName!: string;

  @IsString()
  lastName!: string;

  @IsDateString()
  birthDate!: Date;

  static validate = async (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any,
  ): Promise<[RegisterDto, null] | [null, string[]]> => {
    try {
      const registerDto = new RegisterDto();

      registerDto.username = data.username;
      registerDto.email = data.email;
      registerDto.phone = data.phone;
      registerDto.password = data.password;
      registerDto.description = data.description;
      registerDto.firstName = data.firstName;
      registerDto.lastName = data.lastName;
      registerDto.birthDate = data.birthDate;

      await validateOrReject(registerDto, {
        validationError: { target: false },
      });

      return [registerDto, null];
    } catch (error) {
      if (error instanceof Array) {
        const errorConstraints = error as ValidationError[];

        return [
          null,
          ErrorValidationResponse.fromClassValidatorError(errorConstraints),
        ];
      }

      return [null, ["Unknown error"]];
    }
  };
}
