'use client'

/* eslint-disable @next/next/no-img-element */
import { ElementType, Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Button from '../button/Button'

const navigation = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Table', href: '/dashboard/table' },
    { name: 'Form', href: '/dashboard/form' },
    { name: 'Modal', href: '/dashboard/modal' },
    { name: 'User', href: '/dashboard/user' },
    { name: 'Navbar', href: '/dashboard/navbar' },
    { name: 'Sidebar', href: '/dashboard2/sidebar' },
    { name: 'Sidebar Light', href: '/dashboard3/sidebar-light' },
    {
        name: 'Components', submenu: [
            { name: 'Button', href: '/dashboard/button' },
            { name: 'Accordion', href: '/dashboard/accordion' },
            { name: 'Offcanvas', href: '/dashboard/offcanvas' },
        ]
    },
]

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export default function Header8() {
    const pathname = usePathname()

    return (
        <Disclosure as="nav" className="bg-cyan-600 shadow">
            {({ open }) => (
                <>
                    <div className="px-4 py-2 lg:py-0">
                        <div className="relative flex items-center justify-between">
                            <div className="flex items-center lg:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-shrink-0 items-center ml-2 lg:ml-0">
                                <img
                                    className="h-8 w-auto"
                                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                    alt="Your Company"
                                />
                            </div>
                            <div className="flex flex-1 items-center justify-start lg:items-stretch lg:justify-start">
                                <div className="hidden lg:ml-6 lg:block">
                                    <div className="flex space-x-6">
                                        {navigation.map((item) => (
                                            item.submenu ? <Menu key={item.name} as="div" className="relative group">
                                                <div>
                                                    <Menu.Button className="text-gray-100  group-hover:text-white  border-gray-100 flex items-center
                                                    px-1 py-3 text-base">
                                                        {item.name}
                                                        <ChevronDownIcon className="h-5 w-5 flex-none " aria-hidden="true" />
                                                    </Menu.Button>
                                                </div>
                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <Menu.Items className="absolute left-0 z-10 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                        {item.submenu.map((item: any) => (
                                                            <Menu.Item key={item.name}>
                                                                {({ active }) => (
                                                                    <Link
                                                                        href={item.href}
                                                                        className={classNames(
                                                                            pathname === item.href ? 'bg-gray-100 text-gray-900' : '',
                                                                            'block px-4 py-2 text-sm text-gray-700'
                                                                        )}
                                                                    >
                                                                        {item.name}
                                                                    </Link>
                                                                )}
                                                            </Menu.Item>
                                                        ))}
                                                    </Menu.Items>
                                                </Transition>
                                            </Menu> :
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    className={classNames(
                                                        pathname === item.href ? 'text-white  border-b-2 border-white' : 'text-gray-100 hover:text-white border-gray-300',
                                                        'px-1 py-3 text-base'
                                                    )}
                                                >
                                                    {item.name}
                                                </Link>
                                        ))}

                                    </div>
                                </div>
                            </div>
                            <div className='flex'>
                                <button
                                    type="button"
                                    className="relative rounded-full  p-1 text-white "
                                >
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">View notifications</span>
                                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                                </button>

                                <Button variant='success' size='sm' className='px-4'>
                                    <Link href='#' className='text-white hover:text-white '>Login</Link>
                                </Button>


                                {/* Profile dropdown */}
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none  ring-1 ring-offset-1 ring-gray-100">
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">Open user menu</span>
                                            <img
                                                className="h-7 w-7 rounded-full"
                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt=""
                                            />
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 bg-white z-10 mt-2 w-48 origin-top-right rounded-md bg- py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Your Profile
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Settings
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Sign out
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="lg:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                item.submenu ?
                                    <span key={item.name}>
                                        <Disclosure.Button className="text-gray-100 hover:bg-gray-100 hover:text-gray-900
                                       flex items-center justify-between w-full rounded-md px-3 py-2 text-base ">
                                            {item.name}
                                            <ChevronDownIcon
                                                className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                aria-hidden="true"
                                            />
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="ml-3">
                                            {item.submenu.map((item) => (
                                                <Disclosure.Button
                                                    key={item.name}
                                                    as="a"
                                                    href={item.href}
                                                    className="text-gray-100 hover:bg-gray-100 hover:text-gray-900
                                                   flex items-center justify-between w-full rounded-md px-3 py-2 text-sm"
                                                >
                                                    {item.name}
                                                </Disclosure.Button>
                                            ))}
                                        </Disclosure.Panel>
                                    </span> :
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className={classNames(
                                            pathname === item.href ? 'bg-gray-100 text-gray-900' : 'text-gray-100 hover:bg-gray-100 hover:text-gray-900',
                                            'block rounded-md px-3 py-2 text-base'
                                        )}
                                    >
                                        {item.name}
                                    </Disclosure.Button>

                            ))}

                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}