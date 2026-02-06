import { CheckCircleIcon } from '@/Components/icons/material-symbols-check-circle'
import { SignupForm } from '@/Components/signup-form'
import { GalleryVerticalEnd } from 'lucide-react'
import React from 'react'

function Register() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-md">
            <SignupForm />
          </div>
        </div>
      </div>
      <div className="bg-[#2D3194] relative hidden lg:block flex flex-col py-[200px] px-[100px] text-white">
        <div className="flex flex-col items-start gap-6 mb-12">
          <div className="flex justify-center gap-2 md:justify-start">
            <div className="flex items-start gap-2 font-medium">
              <div className="bg-primary text-primary-foreground flex size-12 items-center justify-center rounded-md">
                <GalleryVerticalEnd className="size-10" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">ICSA Group</h2>
                <p className="text-xs">Auto-Entrepreneur Management System</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 mb-12">
          <h1 className='text-3xl font-bold'>Join the ICSA Group Team</h1>
          <p className='max-w-md'>Create your account to access our comprehensive enterprise management system and collaborate with teams across all departments.</p>
          <div className='flex flex-row gap-2 items-start p-1'>
            <CheckCircleIcon className="mt-1" size={32} color="gold" />
            <div className='text-white'>
              <h3 className='font-bold text-lg'>Complete Access</h3>
              <p className='text-sm'>Full access to all departmental modules and resources</p>
            </div>
          </div>
          <div className='flex flex-row gap-2 items-start p-1'>
            <CheckCircleIcon className="mt-1" size={32} color="gold" />
            <div className='text-white'>
              <h3 className='font-bold text-lg'>Real-Time Collaboration</h3>
              <p>Work seamlessly with teams across the organization</p>
            </div>
          </div>
          <div className='flex flex-row gap-2 items-start p-1'>
            <CheckCircleIcon className="mt-1" size={32} color="gold" />
            <div className='text-white'>
              <h3 className='font-bold text-lg'>Advanced Analytics</h3>
              <p>Powerful insights and reporting tools at your fingertips</p>
            </div>
          </div>
        </div>
        <div className="">
          <p>© 2026 Orange Digital Center. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Register