import Header8 from '@/components/ui/header/Header8'
import SidebarLight from '@/components/ui/sidebar/Sidebar2'
import React from 'react'

export default function SidebarLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className='flex w-full overflow-hidden'>
            <div>
                <SidebarLight />
            </div>
            <div className='w-full bg-gray-200'>
                <Header8 />
                {children}
            </div>
        </div>
    )
}