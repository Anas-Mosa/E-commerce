import { useDispatch } from 'react-redux';
import { addToCart } from './rtk/slices/CartSlice';
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useSwipeable } from 'react-swipeable'; // For swipe functionality
import { useSelector } from 'react-redux';
import { fetchProducts } from './rtk/slices/ProductsSlice';
import {HeartIcon} from '@heroicons/react/24/outline'


const Clothes = ({ products, interval = 6000 }) => {
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideWidth = 300; // Width of each card in pixels
  const skipIds = new Set([14, 41,7]); // IDs to skip
  const [toogle, setToogle] = useState(false);
  const handleToogle = () =>{setToogle(!toogle)}
  // Filter out products with IDs in the skipIds set
  const clothes = useMemo(() => 
    products.filter(product => product.category.id == 1), 
    [products]
  );

  const filteredProducts = useMemo(() => 
    clothes.filter(product => !skipIds.has(product.id)), 
    [products]
  );

  const totalSlides = Math.ceil(filteredProducts.length / 4); // Number of slides needed
  const sliderRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer); // Cleanup timer on unmount
  }, [totalSlides, interval]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const chunks = useMemo(() => 
    Array.from({ length: totalSlides }, (_, i) => 
      filteredProducts.slice(i * 4, i * 4 + 4) // Adjust 4 based on how many cards you want per slide
    ), [filteredProducts, totalSlides]
  );

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={sliderRef}
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        {...swipeHandlers}
      >
        {chunks.map((chunk, index) => (
          <div key={index} className="flex flex-nowrap">
          
            {chunk.map((product) => (
              <div key={product.id} className="flex-shrink-0 w-72 p-4">
                <div className="h-96 relative bg-white rounded-md shadow-xl overflow-hidden">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-white flex justify-center">
                    <img
                      alt={product.title}
                      src={product.images}
                      className="h-48 w-48"
                    />
                    <HeartIcon className=" w-6 h-6" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {product.title}
                    </h3>
                    <p className="text-sm font-medium text-gray-600">{product.price}$</p>
                    <button 
                      onClick={() => dispatch(addToCart(product))}
                      className='bg-blue-600 text-white mt-2 p-2 rounded-lg w-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}


          </div>
        ))}
      </div>
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 focus:outline-none"
        aria-label="Previous Slide"
      >
        &lt;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 focus:outline-none"
        aria-label="Next Slide"
      >
        &gt;
      </button>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {chunks.map((_, index) => (
          <span
            key={index}
            className={`block w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-500'}`}
          />
        ))}
      </div>
    </div>
  );
};


const Electronics = ({ products, interval = 5500 }) => {
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideWidth = 300; // Width of each card in pixels
  const skipIds = new Set([14, 41,7]); // IDs to skip
  const [toogle, setToogle] = useState(false);
  const handleToogle = () =>{setToogle(!toogle)}
  // Filter out products with IDs in the skipIds set
  const clothes = useMemo(() => 
    products.filter(product => product.category.id == 2), 
    [products]
  );

  const filteredProducts = useMemo(() => 
    clothes.filter(product => !skipIds.has(product.id)), 
    [products]
  );

  const totalSlides = Math.ceil(filteredProducts.length / 4); // Number of slides needed
  const sliderRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer); // Cleanup timer on unmount
  }, [totalSlides, interval]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const chunks = useMemo(() => 
    Array.from({ length: totalSlides }, (_, i) => 
      filteredProducts.slice(i * 4, i * 4 + 4) // Adjust 4 based on how many cards you want per slide
    ), [filteredProducts, totalSlides]
  );

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={sliderRef}
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        {...swipeHandlers}
      >
        {chunks.map((chunk, index) => (
          <div key={index} className="flex flex-nowrap">
          
            {chunk.map((product) => (
              <div key={product.id} className="flex-shrink-0 w-72 p-4">
                <div className="h-96 relative bg-white rounded-md shadow-xl overflow-hidden">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-white flex justify-center">
                    <img
                      alt={product.title}
                      src={product.images}
                      className="h-48 w-48"
                    />
                    <HeartIcon className=" w-6 h-6" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {product.title}
                    </h3>
                    <p className="text-sm font-medium text-gray-600">{product.price}$</p>
                    <button 
                      onClick={() => dispatch(addToCart(product))}
                      className='bg-blue-600 text-white mt-2 p-2 rounded-lg w-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}


          </div>
        ))}
      </div>
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 focus:outline-none"
        aria-label="Previous Slide"
      >
        &lt;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 focus:outline-none"
        aria-label="Next Slide"
      >
        &gt;
      </button>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {chunks.map((_, index) => (
          <span
            key={index}
            className={`block w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-500'}`}
          />
        ))}
      </div>
    </div>
  );
};


const Furniture = ({ products, interval = 5900 }) => {
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideWidth = 300; // Width of each card in pixels
  const skipIds = new Set([14, 41,7]); // IDs to skip
  const [toogle, setToogle] = useState(false);
  const handleToogle = () =>{setToogle(!toogle)}
  // Filter out products with IDs in the skipIds set
  const clothes = useMemo(() => 
    products.filter(product => product.category.id == 3), 
    [products]
  );

  const filteredProducts = useMemo(() => 
    clothes.filter(product => !skipIds.has(product.id)), 
    [products]
  );

  const totalSlides = Math.ceil(filteredProducts.length / 4); // Number of slides needed
  const sliderRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer); // Cleanup timer on unmount
  }, [totalSlides, interval]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const chunks = useMemo(() => 
    Array.from({ length: totalSlides }, (_, i) => 
      filteredProducts.slice(i * 4, i * 4 + 4) // Adjust 4 based on how many cards you want per slide
    ), [filteredProducts, totalSlides]
  );

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={sliderRef}
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        {...swipeHandlers}
      >
        {chunks.map((chunk, index) => (
          <div key={index} className="flex flex-nowrap">
          
            {chunk.map((product) => (
              <div key={product.id} className="flex-shrink-0 w-72 p-4">
                <div className="h-96 relative bg-white rounded-md shadow-xl overflow-hidden">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-white flex justify-center">
                    <img
                      alt={product.title}
                      src={product.images}
                      className="h-48 w-48"
                    />
                    <HeartIcon className=" w-6 h-6" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {product.title}
                    </h3>
                    <p className="text-sm font-medium text-gray-600">{product.price}$</p>
                    <button 
                      onClick={() => dispatch(addToCart(product))}
                      className='bg-blue-600 text-white mt-2 p-2 rounded-lg w-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}


          </div>
        ))}
      </div>
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 focus:outline-none"
        aria-label="Previous Slide"
      >
        &lt;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 focus:outline-none"
        aria-label="Next Slide"
      >
        &gt;
      </button>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {chunks.map((_, index) => (
          <span
            key={index}
            className={`block w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-500'}`}
          />
        ))}
      </div>
    </div>
  );
};


const Shoes = ({ products, interval = 5700 }) => {
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideWidth = 300; // Width of each card in pixels
  const skipIds = new Set([14, 41,7]); // IDs to skip
  const [toogle, setToogle] = useState(false);
  const handleToogle = () =>{setToogle(!toogle)}
  // Filter out products with IDs in the skipIds set
  const clothes = useMemo(() => 
    products.filter(product => product.category.id == 4), 
    [products]
  );

  const filteredProducts = useMemo(() => 
    clothes.filter(product => !skipIds.has(product.id)), 
    [products]
  );

  const totalSlides = Math.ceil(filteredProducts.length / 4); // Number of slides needed
  const sliderRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer); // Cleanup timer on unmount
  }, [totalSlides, interval]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const chunks = useMemo(() => 
    Array.from({ length: totalSlides }, (_, i) => 
      filteredProducts.slice(i * 4, i * 4 + 4) // Adjust 4 based on how many cards you want per slide
    ), [filteredProducts, totalSlides]
  );

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={sliderRef}
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        {...swipeHandlers}
      >
        {chunks.map((chunk, index) => (
          <div key={index} className="flex flex-nowrap">
          
            {chunk.map((product) => (
              <div key={product.id} className="flex-shrink-0 w-72 p-4">
                <div className="h-96 relative bg-white rounded-md shadow-xl overflow-hidden">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-white flex justify-center">
                    <img
                      alt={product.title}
                      src={product.images}
                      className="h-48 w-48"
                    />
                    <HeartIcon className=" w-6 h-6" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {product.title}
                    </h3>
                    <p className="text-sm font-medium text-gray-600">{product.price}$</p>
                    <button 
                      onClick={() => dispatch(addToCart(product))}
                      className='bg-blue-600 text-white mt-2 p-2 rounded-lg w-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}


          </div>
        ))}
      </div>
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 focus:outline-none"
        aria-label="Previous Slide"
      >
        &lt;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 focus:outline-none"
        aria-label="Next Slide"
      >
        &gt;
      </button>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {chunks.map((_, index) => (
          <span
            key={index}
            className={`block w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-500'}`}
          />
        ))}
      </div>
    </div>
  );
};


const Miscellaneous = ({ products, interval = 5300 }) => {
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideWidth = 300; // Width of each card in pixels
  const skipIds = new Set([14, 41,7]); // IDs to skip
  const [toogle, setToogle] = useState(false);
  const handleToogle = () =>{setToogle(!toogle)}
  // Filter out products with IDs in the skipIds set
  const clothes = useMemo(() => 
    products.filter(product => product.category.id == 5), 
    [products]
  );

  const filteredProducts = useMemo(() => 
    clothes.filter(product => !skipIds.has(product.id)), 
    [products]
  );

  const totalSlides = Math.ceil(filteredProducts.length / 4); // Number of slides needed
  const sliderRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer); // Cleanup timer on unmount
  }, [totalSlides, interval]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const chunks = useMemo(() => 
    Array.from({ length: totalSlides }, (_, i) => 
      filteredProducts.slice(i * 4, i * 4 + 4) // Adjust 4 based on how many cards you want per slide
    ), [filteredProducts, totalSlides]
  );

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={sliderRef}
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        {...swipeHandlers}
      >
        {chunks.map((chunk, index) => (
          <div key={index} className="flex flex-nowrap">
          
            {chunk.map((product) => (
              <div key={product.id} className="flex-shrink-0 w-72 p-4">
                <div className="h-96 relative bg-white rounded-md shadow-xl overflow-hidden">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-white flex justify-center">
                    <img
                      alt={product.title}
                      src={product.images}
                      className="h-48 w-48"
                    />
                    <HeartIcon className=" w-6 h-6" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {product.title}
                    </h3>
                    <p className="text-sm font-medium text-gray-600">{product.price}$</p>
                    <button 
                      onClick={() => dispatch(addToCart(product))}
                      className='bg-blue-600 text-white mt-2 p-2 rounded-lg w-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}


          </div>
        ))}
      </div>
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 focus:outline-none"
        aria-label="Previous Slide"
      >
        &lt;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 focus:outline-none"
        aria-label="Next Slide"
      >
        &gt;
      </button>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {chunks.map((_, index) => (
          <span
            key={index}
            className={`block w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-500'}`}
          />
        ))}
      </div>
    </div>
  );
};

 // Import the slider component

 function Products() {
  const dispatch = useDispatch();
  const  products = useSelector((state) => state.Products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);


  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6  lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
        
        <img
        src="https://bazzarry-s3-bucket-prod.s3.me-south-1.amazonaws.com/media/wysiwyg/Designs2024/category/1.webp"
        alt="Clothes"
        className="w-full h-auto object-cover transition-opacity duration-1000 ease-in-out my-8"
      />
        <Clothes products={products} />
        <img
        src="https://bazzarry-s3-bucket-prod.s3.me-south-1.amazonaws.com/media/wysiwyg/Designs2024/category/1.webp"
        alt="Electronics"
        className="w-full h-auto object-cover transition-opacity duration-1000 ease-in-out my-8"
      />
        <Electronics products={products} />
        <img
        src="https://bazzarry-s3-bucket-prod.s3.me-south-1.amazonaws.com/media/wysiwyg/Designs2024/category/1.webp"
        alt="Furniture"
        className="w-full h-auto object-cover transition-opacity duration-1000 ease-in-out my-8"
      />
        <Furniture products={products} />
        <img
        src="https://bazzarry-s3-bucket-prod.s3.me-south-1.amazonaws.com/media/wysiwyg/Designs2024/category/1.webp"
        alt="Shoes"
        className="w-full h-auto object-cover transition-opacity duration-1000 ease-in-out my-8"
      />
        <Shoes products={products} />
        <img
        src="https://bazzarry-s3-bucket-prod.s3.me-south-1.amazonaws.com/media/wysiwyg/Designs2024/category/1.webp"
        alt="Miscellaneous"
        className="w-full h-auto object-cover transition-opacity duration-1000 ease-in-out my-8"
      />
        <Miscellaneous products={products} />


      </div>
    </div>
  );
}

export default Products;
