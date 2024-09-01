import React from 'react';

function Promo() {
  return (
    <div className="relative overflow-hidden bg-white mt-32 rtl">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 rtl">
          <div className="lg:flex lg:items-center">
            {/* Image Grid */}
            <div className="lg:flex-1 lg:pr-10">
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl lg:flex lg:justify-start rtl"
              >
                <div className="absolute transform lg:left-0 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8 rtl">
                  <div className="flex flex-wrap gap-6 lg:gap-8 rtl">
                    {/* Image Grid Item */}
                    <div className="w-full sm:w-1/2 lg:w-44 overflow-hidden rounded-lg">
                      <img
                        alt="Men's summer fashion image 1"
                        src="https://images.unsplash.com/photo-1565467232-1a9b64e07c87"
                        className="h-64 w-full object-cover object-center"
                      />
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-44 overflow-hidden rounded-lg">
                      <img
                        alt="Men's summer fashion image 2"
                        src="https://images.unsplash.com/photo-1550860990-0e0fa4a05e2e"
                        className="h-64 w-full object-cover object-center"
                      />
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-44 overflow-hidden rounded-lg">
                      <img
                        alt="Men's summer fashion image 3"
                        src="https://images.unsplash.com/photo-1603791849205-2b9d62b4c88e"
                        className="h-64 w-full object-cover object-center"
                      />
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-44 overflow-hidden rounded-lg">
                      <img
                        alt="Men's summer fashion image 4"
                        src="https://images.unsplash.com/photo-1565049734-bc2f1e5c22a4"
                        className="h-64 w-full object-cover object-center"
                      />
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-44 overflow-hidden rounded-lg">
                      <img
                        alt="Men's summer fashion image 5"
                        src="https://images.unsplash.com/photo-1555036460-335b4f2384af"
                        className="h-64 w-full object-cover object-center"
                      />
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-44 overflow-hidden rounded-lg">
                      <img
                        alt="Men's summer fashion image 6"
                        src="https://images.unsplash.com/photo-1562919481-604b647a63c4"
                        className="h-64 w-full object-cover object-center"
                      />
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-44 overflow-hidden rounded-lg">
                      <img
                        alt="Men's summer fashion image 7"
                        src="https://images.unsplash.com/photo-1595939022086-bec345ff6a08"
                        className="h-64 w-full object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Section */}
            <div className="lg:flex-1 lg:pl-10">
              <div className="sm:max-w-lg lg:max-w-xl">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
                  تشكيله الصيف هنا أخيرًا
                </h1>
                <p className="mt-4 text-lg text-gray-500 rtl sm:text-xl">
                حان وقت التحضيير للحفله
                </p>
                <div className="mt-6 text-center lg:text-left">
                  <a
                    href="/shop" // Update this link to point to the actual shop page
                    className="inline-block rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-center font-medium text-white hover:bg-indigo-700"
                  >
                    تسوق الان
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Promo;
