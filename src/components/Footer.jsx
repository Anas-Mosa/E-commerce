import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-10">
      <div className='flex justify-center'>
      <img
        src="https://alharamstores.com/pub/media/wysiwyg/PAYMENT-_new-_AR.jpg"
        alt="Miscellaneous"
        className="w-[90%] h-auto object-cover transition-opacity duration-1000 ease-in-out my-8 rounded-3xl"
      />
      </div>
      
      <div className="container mx-auto px-4">
        {/* Contact Information */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <p className="text-xl font-semibold">التواصل عبر الرقم المجاني</p>
            <p className="text-4xl font-bold">8000501</p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-xl font-semibold">محادثة مباشرة عبر الواتساب</p>
            <button className="mt-4 px-8 py-2 border-2 border-purple-400 text-purple-600 font-semibold rounded-lg hover:bg-purple-600 hover:text-white transition duration-300">
              ابدأ الآن
            </button>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-8 text-purple-600">
          <a href="#" aria-label="Twitter">
            <i className="fab fa-twitter fa-2x"></i>
          </a>
          <a href="#" aria-label="Instagram">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a href="#" aria-label="Facebook">
            <i className="fab fa-facebook-f fa-2x"></i>
          </a>
          <a href="#" aria-label="Snapchat">
            <i className="fab fa-snapchat fa-2x"></i>
          </a>
        </div>

        {/* Download App Links */}
        <div className="text-center mb-8">
          <p className="text-lg font-semibold mb-4">حمل التطبيق الآن</p>
          <div className="flex justify-center space-x-4">
            <a href="#">
              <img
                src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="w-40"
              />
            </a>
            <a href="#">
              <img
                src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
                alt="Get it on Google Play"
                className="w-40"
              />
            </a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center md:text-left">
          <div>
            <h3 className="font-bold mb-2">الحساب</h3>
            <ul>
              <li><a href="#" className="hover:underline">إعدادات الحساب</a></li>
              <li><a href="#" className="hover:underline">سلة التسوق</a></li>
              <li><a href="#" className="hover:underline">طلباتي</a></li>
              <li><a href="#" className="hover:underline">قائمة الامنيات</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">سياسات بازاري</h3>
            <ul>
              <li><a href="#" className="hover:underline">الشروط والأحكام</a></li>
              <li><a href="#" className="hover:underline">سياسة الخصوصية</a></li>
              <li><a href="#" className="hover:underline">سياسة الاستبدال والاسترجاع</a></li>
              <li><a href="#" className="hover:underline">اتصل بنا</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">خدمات الدفع</h3>
            <ul className="flex flex-wrap justify-center md:justify-start space-x-2">
              {/* Add your payment icons here */}
              <li><img src="path/to/icon1.png" alt="Payment Method" className="w-12"/></li>
              <li><img src="path/to/icon2.png" alt="Payment Method" className="w-12"/></li>
              <li><img src="path/to/icon3.png" alt="Payment Method" className="w-12"/></li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-bold mb-2">بازاري للتجارة</h3>
            <p className="text-sm">بازاري للتجارة هو أول وأكبر منصة تسوق إلكترونية في اليمن والتي تضم آلاف المنتجات...</p>
          </div>
        </div>

        {/* Footer Bottom Text */}
        <div className="mt-8 text-center text-gray-500">
          <p>© بازاري للتجارة 2023</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
