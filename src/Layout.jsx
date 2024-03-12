import React from 'react'
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <>
    <Header></Header>
    <Outlet />
    <Footer ></Footer>
    </>
  )
}

export default Layout