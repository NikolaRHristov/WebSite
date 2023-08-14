import * as Environment from "dotenv";
import { z } from "zod";

Environment.config();

export default z
	.object({
		GitHub: z.string().default(""),
	})
	.parse(process.env);
