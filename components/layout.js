import React from 'react'
import Nav from './nav'

const containerStyle = {
  padding: '2rem',
  maxWidth: '1100px',
}

const Layout = (props) => {
  console.log(props);
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