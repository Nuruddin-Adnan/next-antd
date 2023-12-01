'use client'

import Button from '@/components/ui/button/Button'
import { UsersIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function ButtonPage() {
    return (
        <div>
            <div className='container mx-auto p-5'>
                <div className="flex gap-5 flex-wrap">
                    <span>
                        <Button size='sm'> <UsersIcon className='w-4 h-4' /></Button>
                    </span>
                    <span><Button type='submit'>Regular button</Button></span>
                    <span><Button type='submit' loading>Regular button loading</Button></span>
                    <span><Button size='lg' icon={<UsersIcon />}>Lg button</Button></span>
                    <span><Button variant='light' icon={<UsersIcon />}>Light button</Button></span>
                    <span><Button variant='primary' loading onClick={() => console.log('click')}>primary button</Button></span>
                    <span><Button variant='primary'>primary button</Button></span>
                    <span><Button variant='success' size='' icon={<UsersIcon />}>success button</Button></span>
                    <span><Button variant='info' size='lg'>info button</Button></span>
                    <span><Button variant='warning'>warning button</Button></span>
                    <span><Button variant='warning' loading>warning button</Button></span>
                    <span><Button variant='error' size='sm' loading>error button</Button></span>
                    <span><Button variant='error'>error button</Button></span>
                    <span><Button variant='dark'>Dark button</Button></span>
                    <span><Button variant='dark' size='lg'>Dark button</Button></span>
                    <span><Button variant='outline-primary'>Outline primary button</Button></span>
                    <span><Button variant='outline-success' icon={<UsersIcon />}>Outline success button</Button></span>
                    <span><Button variant='outline-info' size='lg'>Outline info button</Button></span>
                    <span><Button variant='outline-warning' icon={<UsersIcon />} loading>Outline warning button</Button></span>
                    <span><Button variant='outline-warning' icon={<UsersIcon />}>Outline warning button</Button></span>
                    <span><Button variant='outline-error' size='sm' loading>Outline error button</Button></span>
                    <span><Button variant='outline-error' size='sm'>Outline error button</Button></span>
                    <span><Button variant='outline-dark' onClick={() => console.log('Button clicked')}>Outline Dark button</Button></span>

                </div>
            </div>
        </div>
    )
}
