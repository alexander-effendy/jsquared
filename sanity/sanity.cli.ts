import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'p73kqxj1',
    dataset: 'production'
  },
  deployment: {
    appId: 'za4ksxvjk0ahrp4oq2hibv1q',
    autoUpdates: true,
  }
})
