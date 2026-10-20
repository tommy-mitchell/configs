import type { UserConfig } from "tsdown";

/** Transpiles all `.ts` -> `.js` files. */
export const ts: UserConfig;

/** Bundles `.d.ts` files, vendoring dependencies. */
export const dts: UserConfig;

/** Transpiles all `.ts` -> `.js` and bundles `.d.ts` files. */
declare const config: UserConfig[];
export default config;
