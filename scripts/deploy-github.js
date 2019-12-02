const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/2wce/2wce.github.io/blog.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)