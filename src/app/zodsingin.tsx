import * as z from "zod";


const User = z.object({
  firstName: z.string().min(2).max(30),
  lastName: z.string().min(2).max(30),
  email: z.string().email().trim(),
  password:  z.string().min(8),
  confirmPassword:  z.string(),
})