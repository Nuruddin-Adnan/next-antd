'use client'

import { Disclosure } from '@headlessui/react'
import {
    HomeIcon,
    DocumentTextIcon,
    ChartBarIcon,
    UsersIcon,
    InboxIcon,
    ArchiveBoxIcon,
    ChevronRightIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const navigation = [
    { name: 'Home', href: '/dashboard3/sidebar-light', icon: HomeIcon },
    { name: 'Documents', href: '#', icon: DocumentTextIcon },
    { name: 'Analytics', href: '#', icon: ChartBarIcon },
    { name: 'Users', href: '/dashboard2/users', icon: UsersIcon },
    { name: 'Inbox', href: '#', icon: InboxIcon },
    { name: 'Archive', href: '#', icon: ArchiveBoxIcon },
]

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}
export default function SidebarLight() {
    const pathname = usePathname()

    return (
        <>
            {/* Sidebar */}
            <nav className="h-screen  w-64 overflow-auto flex flex-col justify-between  scrollbar-thumb-gray-500 scrollbar-track-gray-100 scrollbar-thin border-r border-r-gray-300">
                <div>
                    <div className="p-3 shadow top-0 sticky bg-white">
                        <div className="text-gray-700 text-2xl font-semibold pt-0.5">Logo</div>
                    </div>

                    {/* Sidebar links */}
                    <div className="space-y-1 mt-4">
                        {
                            navigation.map((item: any, index: number) => <Link key={index} href={item.href} className={pathname === item.href ? 'bg-cyan-600 text-white flex items-center py-2 px-4' : 'flex items-center py-2 px-4 text-gray-700 hover:bg-gray-200'}>
                                <item.icon className="h-6 w-6 mr-2 lg:mr-3" />
                                {item.name}
                            </Link>)
                        }

                        <p className='text-gray-400 pl-4 pt-6 pb-2'>Your teams</p>

                        <Disclosure as="div">
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="w-full py-2 px-4 flex justify-between leading-7 text-gray-700 hover:bg-gray-200 ">
                                        <div className="flex">
                                            <div>
                                                <DocumentTextIcon className="h-6 w-6 mr-2 lg:mr-3" />
                                            </div>
                                            <span className='text-start'>Dropdown Menu </span>
                                        </div>
                                        <ChevronRightIcon
                                            className={classNames(open ? 'rotate-90' : '', 'h-5 w-5 flex-none mt-1')}
                                            aria-hidden="true"
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="space-y-0 px-4">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className={pathname === item.href ? 'block pl-9 py-0.5 text-sm  leading-7 text-gray-100 bg-cyan-600':  'block pl-9 py-0.5 text-sm  leading-7 text-gray-700 hover:bg-gray-200'}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure as="div">
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="w-full py-2 px-4 flex justify-between leading-7 text-gray-700 hover:bg-gray-200 ">
                                        <div className="flex">
                                            <div>
                                                <DocumentTextIcon className="h-6 w-6 mr-2 lg:mr-3" />
                                            </div>
                                            <span className='text-start'>Dropdown Menu 2</span>
                                        </div>
                                        <ChevronRightIcon
                                            className={classNames(open ? 'rotate-90' : '', 'h-5 w-5 flex-none mt-1')}
                                            aria-hidden="true"
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="space-y-0 px-4">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className={pathname === item.href ? 'block pl-9 py-0.5 text-sm  leading-7 text-gray-100 bg-cyan-600':  'block pl-9 py-0.5 text-sm  leading-7 text-gray-700 hover:bg-gray-200'}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure as="div">
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="w-full py-2 px-4 flex justify-between leading-7 text-gray-700 hover:bg-gray-200 ">
                                        <div className="flex">
                                            <div>
                                                <DocumentTextIcon className="h-6 w-6 mr-2 lg:mr-3" />
                                            </div>
                                            <span className='text-start'>Dropdown Menu 3 with more text </span>
                                        </div>
                                        <ChevronRightIcon
                                            className={classNames(open ? 'rotate-90' : '', 'h-5 w-5 flex-none mt-1')}
                                            aria-hidden="true"
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="space-y-0 px-4">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className={pathname === item.href ? 'block pl-9 py-0.5 text-sm  leading-7 text-gray-100 bg-cyan-600':  'block pl-9 py-0.5 text-sm  leading-7 text-gray-700 hover:bg-gray-200'}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    </div>
                </div>

                {/* Sidebar footer */}
                <div className="w-full p-4 border-t mt-5 border-t-gray-100 sticky bottom-0 bg-gray-100">
                    <p className="text-gray-500 text-xs">
                        Powered by
                        <a
                            href="https://tailwindcss.com/"
                            className="text-gray-700 ml-1 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Tailwind CSS
                        </a>
                    </p>
                </div>
            </nav>
        </>
    )
}
