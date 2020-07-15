/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
const React = require('react')
const fs = require('fs')

exports.onRenderBody = ({ setPreBodyComponents, setPostBodyComponents }) => {
  const drupalHeader = fs.readFileSync('./drupal/header.html')
  const drupalFooter = fs.readFileSync('./drupal/footer.html')
  setPostBodyComponents([
    <div
      dangerouslySetInnerHTML={{
        __html: drupalFooter,
      }}
    />,
  ])

  setPreBodyComponents([
    <div
      dangerouslySetInnerHTML={{
        __html: drupalHeader,
      }}
    />,
  ])
}
exports.wrapRootElement = ({ element }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <div className="wrap-page-element">{element}</div>
}
