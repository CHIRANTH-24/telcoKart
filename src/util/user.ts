import { db } from "@/lib/db";
import { User } from "@prisma/client";

type FetchUserParams = {
  id?: string;
  email?: string;
  phone?: string;
  includePassword?: boolean;
};

export async function getUser({
  id,
  email,
  phone,
}: FetchUserParams): Promise<User | null> {
  let user: User | null = null;
  if (id) {
    user = await db.user.findUnique({ where: { id } });
  } else if (email) {
    user = await db.user.findUnique({ where: { email } });
  } else if (phone) {
    user = await db.user.findUnique({ where: { phone } });
  }
  return user;
}

/** Omits password from user */
export function displayUser(user: User) {
  const { password, ...displayUser } = user;
  return displayUser;
}
