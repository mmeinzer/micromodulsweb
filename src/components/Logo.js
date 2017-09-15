import React from 'react'

import textLogo from './um_logo_text.svg'

class Logo extends React.Component {
  render() {
    return (
      <div style={{padding: "1rem"}}>
        <img src={textLogo} style={{ width: "7rem", display: "block", margin: "auto" }}/>
      </div>
    )
  }
}

export default Logo
