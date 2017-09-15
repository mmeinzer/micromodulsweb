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
      <div style={{ backgroundColor: "rgb(251, 250, 252)", height: "100vh"}}>
        {header}
        {children()}
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
