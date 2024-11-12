import { prisma } from "@/data/postgresql";
import { LoginDto } from "../dtos";
import { ConflictError, UnauthorizedError } from "@/shared/errors";
import { RegisterDto } from "../dtos/register.dto";

import argon from "argon2";
import { JWT } from "@/config";

export class AuthService {
  constructor() {}

  public login = async (loginDto: LoginDto) => {
    const user = await prisma.user.findUnique({
      where: {
        email: loginDto.email,
      },
    });

    if (!user) {
      throw new UnauthorizedError("Invalid credentials");
    }

    const isPasswordValid = await argon.verify(
      user.password,
      loginDto.password,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedError("Invalid credentials");
    }

    const payload = {
      id: user.id,
      email: user.email,
    };

    const token = await JWT.generateToken(payload);

    return {
      user,
      token,
    };
  };

  public register = async (registerDto: RegisterDto) => {
    const { password, ...userRest } = registerDto;

    const passwordHashed = await argon.hash(password);

    const prevUser = await prisma.user.findFirst({
      where: {
        OR: [{ email: registerDto.email }, { username: registerDto.username }],
      },
    });

    if (prevUser) {
      throw new ConflictError("User already exist");
    }

    const user = await prisma.user.create({
      data: {
        ...userRest,
        password: passwordHashed,
      },
    });

    const payload = {
      id: user.id,
      email: user.email,
    };

    const token = await JWT.generateToken(payload);

    return {
      user,
      token,
    };
  };

  public refreshToken = async () => {};

  public validateToken = async () => {};
}
