// import prisma from "@/lib/prisma";
// import { z } from "zod";

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     const bodySchema = z.object({
//       email: z.string(),
//       password: z.string(),
//     });

//     const { email, password } = bodySchema.parse(req.body);

//     const user = await prisma.user.findUnique({
//       where: {
//         email: email,
//       },
//     });

//     if (!user || user.password !== password) {
//       return res.status(401).json({ error: "Invalid credentials" });
//     }

//     // Here you should handle creating a session or a JWT token for the authenticated user

//     return res.status(200).json({ message: "Login successful" });
//   } else {
//     return res.status(405).json({ error: "Method not allowed" });
//   }
// }
