import { sassPlugin } from 'esbuild-sass-plugin'
import esbuild from 'esbuild';

await esbuild.build({
  entryPoints: ["src/index.js"],
  outfile: "static/assets/bundle.js",
  bundle: true,
  minify: true,
  target: [
    'es2020',
  ],
  plugins: [sassPlugin()]
})
  .then(() => console.log("Done"))
  .catch(() => process.exit(1));
