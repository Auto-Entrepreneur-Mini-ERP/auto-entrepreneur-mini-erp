import Sidebar from '@/Components/Sidebar';
import React from 'react'
import { Outlet, Navigate } from 'react-router'

function ProtectedRoutes() {

    const user = null
  
  return user ? (
    <>
      <Sidebar />
      <Outlet />
    </>
  ) 
  : Navigate({ to: '/login' });
}

export default ProtectedRoutes