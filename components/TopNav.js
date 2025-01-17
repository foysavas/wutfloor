import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";
import Image from "next/image";
import { isMobile } from "react-device-detect";
import Router from "next/router";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { AdjustmentsIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-scroll";

const navigation = [
  { name: "Twitter", href: "#", current: false },
  { name: "Github", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


function TopNav() {
  const [open, setOpen] = React.useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a className="" href="https://wutfloor.xyz">
                  <img
                    className="h-8 w-8 "
                    src="/img/logo-transparent.png"
                    alt="Workflow"
                  />
                </a>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="https://wutfloor.xyz"
                    className="text-gray-200 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >Wut Floor                </a>
                  <a
                    href="https://wutfloor.xyz/feed"
                    target="_blank"
                    className="text-purple-400 animate-pulse flex justify-center hover:bg-gray-700 cursor-pointer	 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Feed
                  </a>
                  <a
                    className="text-gray-200 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    <Link
                      to="Why"
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={500}
                      className="text-gray-200 hover:bg-gray-700 cursor-pointer	 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Why
                    </Link>

                  </a>

                  <a
                    className="text-gray-200 hover:bg-gray-700 cursor-pointer	 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    <Link
                      to="FAQ"
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={500}
                      className="text-gray-200 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      FAQ
                    </Link>
                  </a>

                </div>

              </div>
              <div className="hidden md:block right-0 absolute">
                <a
                  href="https://twitter.com/wutfloorxyz"
                  target="_blank"
                  className="text-gray-200 hover:bg-gray-700 cursor-pointer	 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  <i className="fab fa-twitter text-xl mr-2" />

                </a>
                <a
                  href="https://github.com/pepimartinez/wutfloor"
                  target="_blank"
                  className="text-gray-200 hover:bg-gray-700 cursor-pointer	 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  <i className="fab fa-github text-xl mr-2" />

                </a>
              </div>

            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="https://wutfloor.xyz/feed"
                  target="_blank"
                  className="text-purple-400 animate-pulse flex justify-center hover:bg-gray-700 cursor-pointer	 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Feed
                </a>
                <a
                  href="#"
                  className="text-gray-200 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex justify-center"
                >

                  <Link
                    to="Why"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    className="text-gray-200 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Why
                  </Link>

                </a>

                <a
                  href="#"
                  className="text-gray-200 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex justify-center"
                >
                  <Link
                    to="FAQ"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    className="text-gray-200 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    FAQ
                  </Link>

                </a>

                <a
                  href="https://twitter.com/wutfloorxyz"
                  target="_blank"
                  className="text-gray-200 flex justify-center hover:bg-gray-700 cursor-pointer	 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  <i className="fab fa-twitter text-xl mr-2" />

                </a>
                <a
                  href="https://github.com/pepimartinez/wutfloor"
                  target="_blank"
                  className="text-gray-200 flex justify-center hover:bg-gray-700 cursor-pointer	 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  <i className="fab fa-github text-xl mr-2" />

                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default TopNav;
