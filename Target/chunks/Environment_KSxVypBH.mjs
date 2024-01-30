(await import('dotenv')).config();
const Environment = (await import('zod')).object({
  Token: (await import('zod')).string().optional().default("")
});

export { Environment as default };
//# sourceMappingURL=Environment_KSxVypBH.mjs.map
