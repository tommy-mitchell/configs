# @tommy-mitchell/configs

Various configs:

- [TypeScript](https://github.com/microsoft/TypeScript)
- [xo](https://github.com/xojs/xo)
- [dprint](https://github.com/dprint/dprint)
- [tsdown](https://github.com/rolldown/tsdown)

## Install

```sh
npm install --save-dev @tommy-mitchell/configs
```

<details>
<summary>Other package managers</summary>
<p>

```sh
yarn add --dev @tommy-mitchell/configs
```

```sh
pnpm add --save-dev @tommy-mitchell/configs
```

</p>
</details>

## Usage

### TypeScript

See [@tommy-mitchell/tsconfig](https://github.com/tommy-mitchell/tsconfig) for more info.

In `tsconfig.json`:

```jsonc
{
	"extends": "@tommy-mitchell/configs/ts",
	"compilerOptions": {/* … */}
}
```

### xo

See [@tommy-mitchell/eslint-config-xo](https://github.com/tommy-mitchell/eslint-config-xo) for more info.

In `xo.config.js`:

```js
import * as configs from "@tommy-mitchell/configs/xo";

/** @type {import('xo').FlatXoConfig} */
export default [...configs.xo, ...configs.dprint];
```

### dprint

See [@tommy-mitchell/dprint-config](https://github.com/tommy-mitchell/dprint-config) for more info.

In `dprint.json(c)`:

```jsonc
{
	"extends": "@tommy-mitchell/configs/dprint",
}
```

### tsdown

In `tsdown.config.ts`:

```ts
import { defineConfig } from "tsdown";
import config from "@tommy-mitchell/configs/tsdown";

export default defineConfig(config);
```
