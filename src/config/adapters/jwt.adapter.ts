import { createSecretKey } from "node:crypto";

import jwt, { SignJWT } from "jose";
import { envs } from "@/config/";

const JWT_SEED = envs.JWT_SEED;
const JWT_ISSUER = envs.JWT_ISSUER;
const JWT_EXPIRATION_TIME = envs.JWT_EXPIRATION_TIME;

export class JWT {
  private static secretKey = createSecretKey(JWT_SEED, "utf-8");

  static generateToken = async (payload: jwt.JWTPayload) => {
    return await new SignJWT(payload)
      .setProtectedHeader({
        alg: "HS256",
      })
      .setIssuedAt()
      .setIssuer(JWT_ISSUER)
      .setExpirationTime(JWT_EXPIRATION_TIME)
      .sign(this.secretKey);
  };

  static async validateToken(token: string): Promise<jwt.JWTPayload | null> {
    try {
      const { payload } = await jwt.jwtVerify(token, this.secretKey, {
        issuer: process.env.JWT_ISSUER,
      });

      return payload;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_) {
      return null;
    }
  }
}
