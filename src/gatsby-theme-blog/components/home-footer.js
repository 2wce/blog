import React, { Fragment } from "react"
import { css, Styled } from "theme-ui"

const Footer = ({ socialLinks }) => (
  <footer
    css={css({
      mt: 4,
      pt: 3,
    })}
  >
    © {new Date().getFullYear()}, Made by
    {` `}
    <a href="https://2wce.github.io">Kudakwashe Mupeni</a>
    {` `}&bull;{` `}
    {socialLinks.map((platform, i, arr) => (
      <Fragment key={platform.url}>
        <Styled.a href={platform.url} target="_blank" rel="noopener noreferrer">
          {platform.name}
        </Styled.a>
        {arr.length - 1 !== i && (
          <Fragment>
            {` `}&bull;{` `}
          </Fragment>
        )}
      </Fragment>
    ))}
  </footer>
)
export default Footer
