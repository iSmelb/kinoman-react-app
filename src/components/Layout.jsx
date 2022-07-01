import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './header/Header'
import Player from './Player'


function Layout() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <main className="main">
          <Outlet/>
        </main>
        <Footer />
      </div>
      <Player/>
    </>
  )
}

export default Layout