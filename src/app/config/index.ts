import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  NODE_ENV: process.env.NODE_ENV,
  accessToken_Secret:process.env.JWT_ACCESS_SECRET,
  accessToken_ExpiresIn:process.env.JWT_ACCESS_EXPIRES_IN,
  refreshToken_Secret:process.env.JWT_REFRESH_SECRET,
  refreshToken_ExpiresIn:process.env.JWT_REFRESH_EXPIRES_IN,
};
