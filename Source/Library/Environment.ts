import * as dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

export default z
	.object({
		GitHub: z.string().default(""),
	})
	.parse(process.env);
