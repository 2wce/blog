/*
 * @file Theme configuration
 */
import { defineConfig } from './src/helpers/config-helper';

const year = new Date().getFullYear();

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
  }
});
