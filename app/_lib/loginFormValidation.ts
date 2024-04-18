import { z, ZodType } from "zod";

export const LoginSchema = z.object({
  username: z.string().trim().min(1, { message: "le Nom d'utilisateur est requis" }),
  password:  z.string().trim().min(1, { message: "le Mot de passe est requis" }),
});

export type SignUpSchemaType = z.infer<typeof LoginSchema>;
