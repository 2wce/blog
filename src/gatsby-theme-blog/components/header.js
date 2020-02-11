import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import { css, Styled, useColorMode } from "theme-ui"
import Bio from "./bio"
import Switch from "./switch"

const rootPath = `${__PATH_PREFIX__}/`

const Title = ({ children, location }) => {
  if (location.pathname === rootPath) {
    return (
      <Styled.h1
        css={css({
          my: 0,
          fontSize: 4,
        })}
      >
        <Styled.a
          as={Link}
          css={css({
            color: `inherit`,
            boxShadow: `none`,
            textDecoration: `none`,
          })}
          to={`/`}
        >
          {children}
        </Styled.a>
      </Styled.h1>
    )
  } else {
    return (
      <Styled.h3
        as="p"
        css={css({
          my: 0,
        })}
      >
        <Styled.a
          as={Link}
          css={css({
            boxShadow: `none`,
            textDecoration: `none`,
            color: `primary`,
          })}
          to={`/`}
        >
          {children}
        </Styled.a>
      </Styled.h3>
    )
  }
}

const iconCss = [{ pointerEvents: `none`, margin: 4 }]

export const query = graphql`
  query {
    sun: file(relativePath: { eq: "sun.png" }) {
      id
      relativePath
      childImageSharp {
        fixed(width: 16, height: 16) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    moon: file(relativePath: { eq: "moon.png" }) {
      id
      relativePath
      childImageSharp {
        fixed(width: 16, height: 16) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default ({ children, title, ...props }) => {
  const [colorMode, setColorMode] = useColorMode()
  const { moon, sun } = useStaticQuery(query)
  const isDark = colorMode === `dark`
  const toggleColorMode = e => {
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <header>
      <div
        css={css({
          maxWidth: `container`,
          mx: `auto`,
          px: 3,
          pt: 4,
        })}
      >
        <div
          css={css({
            display: `flex`,
            justifyContent: `space-between`,
            alignItems: `center`,
            mb: 4,
          })}
        >
          <Title {...props}>{title}</Title>
          {children}
          <Switch
            aria-label="Toggle dark mode"
            checkedIcon={
              <Img
                alt="moon indicating dark mode"
                fixed={moon.childImageSharp.fixed}
                width="16"
                height="16"
                role="presentation"
                css={iconCss}
              />
            }
            uncheckedIcon={
              <Img
                alt="sun indicating light mode"
                fixed={sun.childImageSharp.fixed}
                width="16"
                height="16"
                role="presentation"
                css={iconCss}
              />
            }
            checked={isDark}
            onChange={toggleColorMode}
          />
        </div>
        {props.location.pathname === rootPath && <Bio />}
      </div>
    </header>
  )
}
