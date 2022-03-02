import React from 'react'
import Nav from '../Nav';

const Layout = (props) => {
  return (
        <div className="m-4">
            <Nav />
            {props.children}
        </div>
  )
}

export default Layout;