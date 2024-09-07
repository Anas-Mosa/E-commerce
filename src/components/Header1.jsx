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
    { name: 'الحساب', to: '/signin', icon: <UserCircleIcon className="h-5 w-5" /> },
    { name: 'الصفحة الرئيسية', to: '/', icon: <HomeIcon className="h-5 w-5" /> },
  ],
};
import { useSelector } from 'react-redux'
import Cart from './Cart';
import { NavLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

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
                    src="https://static.vecteezy.com/system/resources/previews/016/017/018/original/ecommerce-icon-free-png.png"
                    className="h-20 w-20 "
                    onClick={() => window.scroll({top:0,behavior:"smooth"})}
                  />
                </NavLink>
              </div>
              <div className="ml-auto flex items-center space-x-6 rtl">
                <div className="hidden lg:flex lg:space-x-6">
                  <NavLink onClick={() => window.scroll({top:600,behavior:"smooth"})} to={"/"} className=" cursor-pointer flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">
                      
                        <span className="mr-2">تسوق</span>
                        <HeartIcon className="h-5 w-5" />
                      
                  </NavLink>
                  {navigation.pages.map((page) => (
                    <NavLink onClick={handleScrool}
                      key={page.name}
                      to={page.to}
                      sm
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
