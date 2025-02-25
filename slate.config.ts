/*
 * @file Theme configuration
 */
import { defineConfig } from './src/helpers/config-helper';

const year = new Date().getFullYear();

const { ALGOLIA_API_KEY, ALGOLIA_APP_ID,ALGOLIA_INDEX_NAME } = import.meta.env

export default defineConfig({
  lang: 'en-US',
  site: 'https://kudamupeni.vercel.app',
  avatar: '/favicons/favicon.ico',
  title: "Thoughts and Ramblings",
  description: "A safe space for me to share my thoughts and ideas on topics I care about.",
  lastModified: true,
  readTime: true,
  footer: {
    copyright: `© ${year} Kudakwashe Mupeni`,
  },
  algolia: {
    apiKey: ALGOLIA_API_KEY,
    appId: ALGOLIA_APP_ID,
    indexName: ALGOLIA_INDEX_NAME,
  }
});
