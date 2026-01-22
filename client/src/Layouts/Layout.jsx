import Sidebar from '@/Components/Sidebar'
import ProtectedRoutes from '@/utils/ProtectedRoutes'
import React from 'react'

function Layout() {
  return (
    <>
        <ProtectedRoutes />
    </>
  )
}

export default Layout