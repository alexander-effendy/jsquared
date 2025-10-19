import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.VITE_SANITY_PROJECT_ID,
    dataset: 'production',
  },
  deployment: {
    appId: process.env.VITE_SANITY_APP_ID,
    autoUpdates: true,
  },
})