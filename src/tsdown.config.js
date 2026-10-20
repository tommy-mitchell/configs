import { defineConfig } from "tsdown";
import { stripComments } from "strip-comments-js";

/** @type {import("tsdown").UserConfig} */
export const ts = {
	entry: "src/index.ts",
	dts: false,
	unbundle: true,
	clean: true,
	outExtensions: () => ({ js: ".js" }),
	outputOptions: {
		comments: {
			jsdoc: false,
		},
	},
};

/** @type {import("tsdown").UserConfig} */
export const dts = {
	dts: {
		entry: "src/index.ts",
		emitDtsOnly: true,
	},
	outExtensions: () => ({ dts: ".d.ts" }),
	outputOptions: {
		chunkFileNames: "[name].d.ts",
		codeSplitting: {
			groups: [{
				name: "vendor.d",
				test: /node_modules.*\.d\.[cm]?ts$/v,
			}],
		},
		plugins: {
			name: "strip-vendor-comments",
			renderChunk: (code, chunk) => chunk.fileName === "vendor.d.ts" ? stripComments(code) : null,
		},
		minifyInternalExports: false,
	},
};

export default defineConfig([ts, dts]);
