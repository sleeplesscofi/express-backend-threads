import "dotenv/config";
import { get } from "env-var";

export const envs = {
  PORT: get("PORT").required().asInt(),
  JWT_SEED: get("JWT_SEED").required().asString(),
  JWT_ISSUER: get("JWT_ISSUER").required().asString(),
  JWT_EXPIRATION_TIME: get("JWT_EXPIRATION_TIME").required().asString(),
};
