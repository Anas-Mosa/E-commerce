import React, { useEffect, useState } from 'react';

function Preview() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://api.escuelajs.co/api/v1/categories')
      .then(response => response.json())
      .then(data => {
        // Transform data to fit the format needed
        const transformedData = data
          .map(category => ({
            name: category.name,
            description: 'وصف مؤقت', // Placeholder description in Arabic
            imageSrc: category.image, // Assuming the API returns an image URL, adjust if needed
            imageAlt: `صورة لـ ${category.name}`, // Alt text in Arabic
            href: '#', // Replace with actual link if available
          }))
          .filter(category => category.imageSrc); // Filter out categories without images
        setCategories(transformedData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError('فشل في تحميل الفئات.');
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center py-16">جاري التحميل...</p>;
  if (error) return <p className="text-center py-16 text-red-500">{error}</p>;

  return (
    <div id='category' className="bg-gray-100 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto lg:max-w-none">
          <h2 className="text-2xl font-bold text-gray-900">المجموعات</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {categories.length > 0 ? (
              categories.map((category) => (
                <a
                  key={category.name}
                  href={category.href}
                  className="group block bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105"
                >
                  <div className="relative h-48 w-full"> {/* Adjusted height for smaller cards */}
                    <img
                      alt={category.imageAlt}
                      src={category.imageSrc}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="p-3"> {/* Adjusted padding for smaller cards */}
                    <h3 className="text-sm text-gray-500">
                      <span className="font-semibold text-gray-900 group-hover:text-gray-600">
                        {category.name}
                      </span>
                    </h3>
                    <p className="text-sm text-gray-900">{category.description}</p> {/* Adjusted font size */}
                  </div>
                </a>
              ))
            ) : (
              <p className="text-center py-16 text-gray-500">لا توجد فئات متاحة.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preview;
 

