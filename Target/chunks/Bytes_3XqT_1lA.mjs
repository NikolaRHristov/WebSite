const Bytes = async (Bytes, Decimals = 2) => {
  if (Bytes === 0) {
    return "0 Bytes";
  }
  const K = 1024;
  const I = Math.floor(Math.log(Bytes) / Math.log(K));
  return `${Number.parseFloat(
    (Bytes / K ** I).toFixed(Decimals < 0 ? 0 : Decimals)
  )} ${["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"][I]}`;
};

export { Bytes as default };
//# sourceMappingURL=Bytes_3XqT_1lA.mjs.map
