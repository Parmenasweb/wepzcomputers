"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog, DialogPanel } from "@headlessui/react";
import { NavigationMenuItems } from "@/components/navComponents/navMenu";

import Link from "next/link";
import { ToggleMode } from "@/components/toggleMode";
import Image from "next/image";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              src="https://wepzcomputers.in/wp-content/uploads/2022/02/cropped-wepz-computers-Logo.png"
              alt="WEPZ Computers Logo"
              width={100}
              height={70}
              quality={100}
              className="text-white font-bold flex items-start mb-2 "
            />
          </a>
        </div>
        {/* toggle menu button */}
        <div className="flex justify-between items-center lg:hidden">
          <ToggleMode />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 ml-2"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-7 w-7 flex items-center justify-center" />
          </Button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {/* navigation menu */}
          {/* {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))} */}
          <NavigationMenuItems />
        </div>
        <div className="hidden lg:flex md:flex-row gap-2 lg:flex-1 lg:justify-end">
          <ToggleMode />
          <Link
            href="/contact"
            className="inline-block rounded-md bg-gradient-to-r from-blue-500 to-teal-400 text-white dark:bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-indigo-500 dark:hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:focus-visible:outline-indigo-500 transition-colors duration-200"
          >
            Contact Us{" "}
            <span aria-hidden="true" className="ml-1">
              &rarr;
            </span>
          </Link>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:sm:ring-gray-100/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Wepz Computers</span>
              <img
                alt=""
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-300"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-500/50">
              <div className="space-y-2 py-6">
                <NavigationMenuItems />
              </div>
              <div className="py-6 flex flex-col gap-2 md:flex-row">
                <Link
                  href="/contact"
                  className="inline-block rounded-md bg-gradient-to-r from-blue-500 to-teal-400 text-white px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
