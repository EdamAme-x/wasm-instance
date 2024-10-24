/*
 * @module @evex/wasmex
 * Run wasm in multiple environments with the same code (Browser, Node.js, Deno,
Bun, etc.) 
 */
// deno-lint-ignore ban-types
type Base64 = string & {};

/**
 * Loads and instantiates a WebAssembly module from a given source.
 *
 * The source can be a Uint8Array or a base64 encoded string.
 *
 * Returns a promise that resolves to an object with the instance and module properties.
 *
 * @param {Uint8Array | Base64} source The source of the WebAssembly module.
 * @param {WebAssembly.Imports} importObject An object that specifies the imports for the module.
 *
 * @returns {Promise<{instance: WebAssembly.Instance, module: WebAssembly.Module}>} An object with the instance and module properties.
 */
export async function Wasmex(
  source: Uint8Array | Base64,
  importObject?: WebAssembly.Imports,
): Promise<{
  instance: WebAssembly.Instance;
  module: WebAssembly.Module;
}> {
  if (source instanceof Uint8Array) {
    source = btoa(String.fromCharCode(...source));
  }

  return (
    await WebAssembly.instantiate(
      await (
        await fetch(
          `data:application/wasm;base64,${source}`,
        )
      ).arrayBuffer(),
      importObject,
    )
  );
}
