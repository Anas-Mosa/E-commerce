import React, { useState } from 'react';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
} from '@headlessui/react';
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
  HomeIcon,
  UserCircleIcon,
  CurrencyDollarIcon,
  HeartIcon,
  TruckIcon,
  ShoppingCartIcon,
  PhoneArrowDownLeftIcon,
} from '@heroicons/react/24/outline';

const navigation = {
  pages: [
    { name: 'التوصيل', to: '/delivery', icon: <TruckIcon className="h-5 w-5" /> },
    { name: 'تواصل معنا', to: '/contact', icon: <PhoneArrowDownLeftIcon className="h-5 w-5" /> },
    { name: 'المفضلات', to: '/', icon: <HeartIcon className="h-5 w-5" /> },
    { name: 'الحساب', to: '/signin', icon: <UserCircleIcon className="h-5 w-5" /> },
    { name: 'الصفحة الرئيسية', to: '/', icon: <HomeIcon className="h-5 w-5" /> },
  ],
};
import { useSelector } from 'react-redux'
import Cart from './Cart';
import { NavLink } from 'react-router-dom';


function Header1({toggleCart}) {
  const [open, setOpen] = useState(false);
  const cart =useSelector((state)=>state.cart)
  const handleScrool = () => {window.scrollTo({
    top:0,
    
  })}
  
  return (
    <div className="fixed top-0 z-30 w-full bg-white shadow-md rtl">
      {/* Mobile menu */}
      <Dialog open={open} onClose={() => setOpen(false)} className="relative z-40 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear"
        />
        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out"
          >
            <div className="flex px-4 pb-2 pt-5">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="sr-only">إغلاق القائمة</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            
            <div className="space-y-6 px-4 py-6">
              {navigation.pages.map((page) => (
                <NavLink onClick={handleScrool}
                  key={page.name}
                  to={page.to}
                  className="flex items-center text-gray-900 hover:text-indigo-600"
                >
                  <span className="mr-2">{page.name}</span>
                  {page.icon}
                </NavLink>
              ))}
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      <header className="relative bg-white shadow-sm rtl">
        <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          احصل على توصيل مجاني للطلبات التي تتجاوز 100 دولار
        </p>

        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 rtl">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
              >
                <span className="sr-only">فتح القائمة</span>
                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
              </button>
              <div className="ml-4 flex lg:ml-0">
                <NavLink to="/">
                  <span className="sr-only">شركتك</span>
                  <img
                    alt="شعار الشركة"
                    src="data:image/png;base64,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"
                    className="h-24 w-24 "
                  />
                </NavLink>
              </div>
              <div className="ml-auto flex items-center space-x-6 rtl">
                <div className="hidden lg:flex lg:space-x-6">
                  {navigation.pages.map((page) => (
                    <NavLink onClick={handleScrool}
                      key={page.name}
                      to={page.to}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      <span className="mr-2">{page.name}</span>
                      {page.icon}
                    </NavLink>
                  ))}
                </div>
                <div className="flex lg:ml-6">
                  <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">بحث</span>
                    <MagnifyingGlassIcon aria-hidden="true" className="h-6 w-6" />
                  </a>
                </div>
              
                {/* cart */}
                <div onClick={toggleCart} className="ml-4 flow-root lg:ml-6">
                  <a href="#" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      aria-hidden="true"
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{cart.length}</span>
                    <span className="sr-only">عناصر في العربة، عرض السلة</span>
                  </a>
                </div>
            
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header1;
