import React from 'react'

import textLogo from './um_logo_text.svg'

class Logo extends React.Component {
  render() {
    return (
      <div>
        <img src={textLogo} style={{ width: 100 }}/>
      </div>
    )
  }
}

export default Logo
