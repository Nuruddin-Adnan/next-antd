import Header8 from '@/components/ui/header/Header8'
import Sidebar from '@/components/ui/sidebar/Sidebar'
import React from 'react'

export default function SidebarLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className='flex w-full bg-gray-200 overflow-hidden'>
            <div>
                <Sidebar />
            </div>
            <div className='w-full'>
                <Header8 />
                {children}
            </div>
        </div>
    )
}
