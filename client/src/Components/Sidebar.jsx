import React from 'react'
import { AppSidebar } from './app-sidebar'
import { SidebarProvider } from './ui/sidebar'
import Header from './Header'

function Sidebar() {
  return (
    <>
        <SidebarProvider>
            <AppSidebar />
            <Header />
        </SidebarProvider>
    </>
  )
}

export default Sidebar