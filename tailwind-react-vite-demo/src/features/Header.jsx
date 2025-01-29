import React from 'react'
import { NavLink, Outlet } from 'react-router'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { HiBars3 , HiBell , HiMagnifyingGlass, HiShoppingCart, HiXMark } from 'react-icons/hi2'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'about', href: '/about'},
  { name: 'Products', href: '/products'},
 ]

const Header = () => {
  return (
    <>
       <Disclosure as="nav" className="bg-gray-600">
      <div className="max-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <HiBars3 aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <HiXMark aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
             <span className='text-white'>TailwindProject</span>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className = {({isActive})=>isActive ?'bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium' :'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>


         

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <div className="relative hidden sm:block sm:me-2"> 
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-700 text-white rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <HiMagnifyingGlass className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
        </div>

          <div className='hidden sm:block sm:me-2'>
            <NavLink to='/register' className = {({isActive})=>isActive ?'bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium' :'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'}>Register</NavLink>
            <NavLink to='/login' className = {({isActive})=>isActive ?'bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium' :'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'}>Login</NavLink>
          </div>
           
            <button
              type="button"
              className="relative me-2 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
            >
              <span className="absolute -inset-1.5" />
              <HiShoppingCart aria-hidden="true" className="size-8" />
              <span className='absolute bg-red-600 text-white px-2 rounded-full -top-1 -right-4'>0</span>
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="size-8 rounded-full"
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Your Profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({isActive})=>isActive? "bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium": "block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"}
            >
              {item.name}
            </NavLink>
          ))}
             <NavLink to='/register'  className={({isActive})=>isActive? "bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium": "block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"}>Register</NavLink>
             <NavLink to='/login'   className={({isActive})=>isActive? "bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium": "block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"}>Login</NavLink>
             <div className="relative"> 
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-700 text-white rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <HiMagnifyingGlass className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>
        </div>
      </DisclosurePanel>
      </Disclosure>
      
      
      <Outlet/>
    </>
  )
}

export default Header
