import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import awsAmplify from 'astro-aws-amplify';
import aws from 'astro-sst';

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: "server",
  adapter: aws({
    deploymentStrategy: "edge",
  }),
});