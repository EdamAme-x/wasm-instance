# wasmex

Run wasm in multiple environments with the same code (Browser, Node.js, Deno,
Bun, etc.)

```bash
npx jsr add jsr:@evex/wasmex
bunx --bun jsr add jsr:@evex/wasmex
deno add jsr:@evex/wasmex
```

```ts
import { Wasmex } from "@evex/wasmex";

// base64 or unit8array
const wasmSource = ...;

const wasm = await Wasmex(wasmSource); // or await Wasmex(wasmSource, importObject)

// 3
console.log(
    wasm.instance.exports.addOne(2),
);
```

by [@EdamAme-x](https://x.com/amex2189) & [@evex-dev](https://evex.land)
