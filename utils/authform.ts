import { signIn } from "@/auth";
import client from "@/dbGlobalPrisma";
import bcrypt from 'bcryptjs';
import { redirect } from "next/navigation";

export const signupHandler = async(formdata: FormData)=>{
    "use server";
    const name = formdata.get("name") as string | undefined;
    const email = formdata.get("email") as string | undefined;
    const password = formdata.get("password") as string | undefined;
    if(!(name && email && password))
        throw new Error("Fields cannot be empty");
    try{
        const user = await client.user.findUnique({
            where: {email}
        });
        if(user)
            throw new Error("Email already in use");
        // Hash the password
        const saltRounds = 11;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const newUser = await client.user.create({
            data: {
                name,
                email,
                password: hashedPassword
            }
        });
        redirect('/signin');
    }catch (error) {
        throw error;
    }
}

export const signinHandler = async(formdata: FormData)=>{
    "use server";
    const email = formdata.get("email") as string | undefined;
    const password = formdata.get("password") as string | undefined;
    if(!(email && password))
        throw new Error("Fields cannot be empty");
    try{
        await signIn("credentials", {
            email,
            password,
        })
        redirect('/');
    }catch (error) {
        throw error;
    }
}

export const googleHandler = async()=>{
    "use server";
    await signIn("google");
}