import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const Navbar = () => {

  return (
<Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="data:image/png;base64,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"
                    alt=""
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRSejjq2Wk9X6brh7Wc5_2JGTQBDczQ-fFcw&usqp=CAU"
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
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
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



export default Navbar