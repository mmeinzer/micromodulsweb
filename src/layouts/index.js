import React from 'react'
import Link from 'gatsby-link'

import Logo from '../components/Logo'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header
    if (location.pathname === '/') {
      header = (
        <h1>
          <Link to={'/'} >
            <Logo />
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3>
          <Link to={'/'}>
            <Logo />
          </Link>
        </h3>
      )
    }
    return (
      <div style={{overflow: "auto", minHeight: "100vh", background: "#FDFDFD"}}>
        {header}
        {children()}
      </div>
    )
  }
}

export default Template
