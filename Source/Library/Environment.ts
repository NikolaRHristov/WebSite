import * as Environment from "dotenv";
import { z } from "zod";

Environment.config();

export default z
	.object({
		Token: z.string().default(""),
	})
	.parse(process.env);
