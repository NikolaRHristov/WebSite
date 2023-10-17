(await import("dotenv")).config();

export default (await import("zod")).object({
	Token: (await import("zod")).string().optional().default(""),
});
