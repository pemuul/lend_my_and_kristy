// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

const isGitHubActions = process.env.GITHUB_ACTIONS === "true";

export default defineConfig({
  site: "https://pemuul.github.io",
  base: isGitHubActions ? "/lend_my_and_kristy/" : "/",
  output: "static",
  integrations: [tailwind(), icon()],
});
