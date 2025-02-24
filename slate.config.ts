/*
 * @file Theme configuration
 */
import { defineConfig } from './src/helpers/config-helper';

const year = new Date().getFullYear();

export default defineConfig({
  lang: 'en-US',
  site: 'https://slate-blog-demo.vercel.app',
  avatar: '/avatar.png',
  title: 'Kuda Mupeni',
  description: 'My thoughts, simple stories.',
  lastModified: true,
  readTime: true,
  footer: {
    copyright: `© ${year} Slate Design`,
  }
});
