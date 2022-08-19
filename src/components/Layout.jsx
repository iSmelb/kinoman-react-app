import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Outlet } from 'react-router-dom'
import { auth } from '..'
import { useAddUser } from '../hooks/useAddUser'
import Footer from './Footer'
import Header from './header/Header'
import Player from './Player'

function Layout() {
  const [_, loading] = useAuthState(auth)

  return (
    <>
      {!loading &&
        <div className="wrapper">
          <Header />
          <main className="main">
            <Outlet />
          </main>
          <Footer />
        </div>
      }
      <Player />
    </>
  )
}

export default Layout