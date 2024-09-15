import { db } from "@/lib/db";
import { LoginSchema } from "@/lib/zod";

export async function login(values:LoginSchema){
    const parsed = LoginSchema.safeParse(values)
    if(parsed.error){
        throw new Error(parsed.error.errors[0].message)
    }

    const {email , password} = parsed.data

    const existingUser = await db.user.findUnique({where : {email}})

    if(existingUser){
        throw new Error("User not found");
    }
}