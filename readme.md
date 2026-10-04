# @tommy-mitchell/configs

TypeScript, xo, and dprint configs.

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

```jsonc
// tsconfig.json
{
	"extends": "@tommy-mitchell/configs/tsconfig",
	"compilerOptions": {/* … */}
}
```

### xo

See [@tommy-mitchell/eslint-config-xo](https://github.com/tommy-mitchell/eslint-config-xo) for more info.

```js
import * as configs from "@tommy-mitchell/configs/xo";

/** @type {import('xo').FlatXoConfig} */
export default [...configs.xo, ...configs.dprint];
```

### dprint

See [@tommy-mitchell/dprint-config](https://github.com/tommy-mitchell/dprint-config) for more info.

```jsonc
// dprint.jsonc
{
	"extends": "@tommy-mitchell/configs/dprint",
}
```
