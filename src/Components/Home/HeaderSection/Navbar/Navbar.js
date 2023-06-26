import React from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from "../../../../media/logo.png";
import { useState } from 'react';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';


const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Highlights', href: '/highlights' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
]


const Navbar = ({ bgColor }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div>
            <nav className="nav-bar absolute z-20 top-0 w-full flex items-center justify-between px-6 lg:px-8 lg:ps-6 md:text-white" aria-label="Global">
                <div className="nav-image flex lg:flex-1">
                    <Link to={'/'} className="flex items-center cursor-pointer">
                        <img
                            className="h-auto w-20"
                            src={logo}
                            alt=""
                        />
                        <span className="lg:not-sr-only sr-only ms-2 font-bold">Scorer Highlights</span>
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 md:text-white"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon style={bgColor} className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div id="sidebar" className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <NavLink key={item.name} to={item.href} className="nav-text relative text-sm font-semibold leading-6">
                            {item.name}
                        </NavLink>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="#" className="text-sm font-semibold leading-6 hover:underline">
                        Log in <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-50" />
                <Dialog.Panel className="sm-navbar fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 pb-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link to={'/'} className="-m-1.5 p-1.5">
                            <img
                                className="h-auto w-20"
                                src={logo}
                                alt=""
                            />
                        </Link>
                        <span className="not-sr-only">Soccer Highlights</span>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div className="py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </div>
    );
};

export default Navbar;