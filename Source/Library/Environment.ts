(await import("dotenv")).config();

export const { default: Zod } = await import("zod");

export default Zod.z
	.object({
		Token: Zod.z.string().default(""),
	})
	.parse(process.env);
