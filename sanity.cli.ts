import {defineCliConfig} from 'sanity/cli'

// Bringing the projectId and dataset from the environment variables
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  }
})
