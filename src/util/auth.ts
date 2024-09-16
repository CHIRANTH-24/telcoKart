import { JwtPayload, sign, verify } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

export const COOKIE_NAME = "__telkocart__";
export const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  maxAge: 24 * 60 * 60, //1day in sec
};

export async function generateAccessToken(payload: any) {
  const token = sign(payload, JWT_SECRET, {
    expiresIn: "1hr",
    algorithm: "HS256",
  });
  return token;
}

export async function verifyToken(token: string) {
  const payload = verify(token, JWT_SECRET, {
    algorithms: ["HS256"],
  }) as { id: string; email: string };
  return payload;
}

/** Generates random OTP
 * @param {Number} length - size of the OTP
 * @default length = 6
 */
export function generateOTP(length = 6) {
  if (length <= 0) {
    throw new Error("Length must be greater than 0");
  }

  const min = Math.pow(10, length - 1);
  const max = Math.pow(10, length) - 1;

  return Math.floor(min + Math.random() * (max - min + 1)).toString();
}
