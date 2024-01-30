function* Chunks (arr, n) {
  for (let i = 0; i < arr.length; i += n) {
    yield arr.slice(i, i + n);
  }
}

export { Chunks as default };
//# sourceMappingURL=Chunks_n4Msk03f.mjs.map
