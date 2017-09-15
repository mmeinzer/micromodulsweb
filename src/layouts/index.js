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
            Micro Moduls
          </Link>
          <Logo />
        </h1>
      )
    } else {
      header = (
        <h3>
          <Link to={'/'}>
            Micro Moduls
          </Link>
        </h3>
      )
    }
    return (
      <div>
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
