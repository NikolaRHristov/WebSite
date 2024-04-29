const Request = async (Where, With = {}, Type = "octokit") => {
  try {
    console.log(`Successfully ${Where}`);
    switch (Type) {
      case "octokit":
        return await new (await import('@octokit/core')).Octokit({
          auth: (await import('./Environment_XrWdZv6Q.mjs')).default.parse(process.env).Token
        }).request(Where, With);
    }
  } catch (_Error) {
    console.log(`Could not ${Where}`);
  }
};

export { Request as default };
//# sourceMappingURL=Request_DFAZ0sve.mjs.map
