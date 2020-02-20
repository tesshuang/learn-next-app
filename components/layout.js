import React from 'react'
import Nav from './nav'

const containerStyle = {
  padding: '2rem',
  maxWidth: '1100px',
  margin: '0 auto',
}

const Layout = (props) => {
  return (
    <div>
      <Nav />
      <div style={containerStyle}>
        {props.children}
      </div>
    </div>
  )
}

export default Layout