import { CircularProgress } from '@mui/material'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Outlet } from 'react-router-dom'
import { auth } from '..'
import Footer from './Footer'
import Header from './header/Header'
import Player from './Player'

function Layout() {
  const [_, loading] = useAuthState(auth)

  return (
    <>
      {loading
        ? <CircularProgress sx={{
          margin: '0 auto',
          display: 'block',
          position: 'fixed',
          top: '30%',
          left: '0',
          right: '0'
        }}
        />
        : <div className="wrapper">
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