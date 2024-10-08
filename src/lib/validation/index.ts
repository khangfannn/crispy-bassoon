import * as z from "zod";


export const SignupValidation = z.object({
    name: z.string().min(2 , {message : 'Too short to be name'}),
    username: z.string().min(2, {message : 'Too short to be username'}),
    email: z.string().email(),
    password: z.string().min(8 , {message : 'passwords must be at least 8 characters'}),
  });
  