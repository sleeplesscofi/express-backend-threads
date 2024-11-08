import { LoginDto } from "../dtos";

export class AuthService {
  constructor() {}

  public async login(loginDto: LoginDto) {
    return loginDto;
  }

  public async register() {}

  public async refreshToken() {}

  public async validateToken() {}
}
