import { prisma } from "@/data/postgresql";
import { LoginDto } from "../dtos";
import { NotFoundError } from "@/shared/errors";

export class AuthService {
  constructor() {}

  public async login(loginDto: LoginDto) {
    const user = await prisma.user.findUnique({
      where: {
        email: loginDto.email,
      },
    });

    if (!user) {
      throw new NotFoundError("User not found");
    }

    return user;
  }

  public async register() {}

  public async refreshToken() {}

  public async validateToken() {}
}
