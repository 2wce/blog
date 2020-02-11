import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import ReactDisqusComments from "react-disqus-comments"
import LazyLoad from "react-lazy-load"
import { css, Styled } from "theme-ui"
import Layout from "../components/layout"
import PostFooter from "../components/post-footer"
import SEO from "../components/seo"

const Post = ({
  data: {
    post,
    site: {
      siteMetadata: { title },
    },
  },
  location,
  previous,
  next,
}) => (
  <Layout location={location} title={title}>
    <SEO title={post.title} description={post.excerpt} />
    <main>
      <Styled.h1>{post.title}</Styled.h1>
      <Styled.p
        css={css({
          fontSize: 1,
          mt: -3,
          mb: 3,
        })}
      >
        {post.date}
      </Styled.p>
      <MDXRenderer>{post.body}</MDXRenderer>
    </main>
    <LazyLoad offsetTop={400}>
      <ReactDisqusComments
        shortname="2wce"
        identifier={post.id}
        title={post.title}
        url={post.url}
        category_id={post.category_id}
        //onNewComment={this.notifyAboutComment}
      />
    </LazyLoad>
    <PostFooter {...{ previous, next }} />
  </Layout>
)

export default Post
