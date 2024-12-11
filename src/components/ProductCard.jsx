import React from 'react';

const products = [
  {
    imageSrc: '/images/product1.jpg',
    title: 'Graphic Design',
    department: 'English Department',
    oldPrice: '16.48',
    newPrice: '6.48',
    colors: ['#1098F7', '#35D07F', '#FBC638', '#DC3545'],
  },
  {
    imageSrc: '/images/product2.jpg',
    title: 'Graphic Design',
    department: 'English Department',
    oldPrice: '24.99',
    newPrice: '14.99',
    colors: ['#C0392B', '#8E44AD', '#2980B9', '#27AE60'],
  },
  {
    imageSrc: '/images/product3.jpg',
    title: 'Graphic Design',
    department: 'English Department',
    oldPrice: '24.99',
    newPrice: '14.99',
    colors: ['#C0392B', '#8E44AD', '#2980B9', '#27AE60'],
  },
  {
    imageSrc: '/images/product4.jpg',
    title: 'Graphic Design',
    department: 'English Department',
    oldPrice: '24.99',
    newPrice: '14.99',
    colors: ['#C0392B', '#8E44AD', '#2980B9', '#27AE60'],
  },
  {
    imageSrc: '/images/product5.jpg',
    title: 'Graphic Design',
    department: 'English Department',
    oldPrice: '24.99',
    newPrice: '14.99',
    colors: ['#C0392B', '#8E44AD', '#2980B9', '#27AE60'],
  },
  {
    imageSrc: '/images/product6.jpg',
    title: 'Graphic Design',
    department: 'English Department',
    oldPrice: '24.99',
    newPrice: '14.99',
    colors: ['#C0392B', '#8E44AD', '#2980B9', '#27AE60'],
  },
  {
    imageSrc: '/images/product7.jpg',
    title: 'Graphic Design',
    department: 'English Department',
    oldPrice: '24.99',
    newPrice: '14.99',
    colors: ['#C0392B', '#8E44AD', '#2980B9', '#27AE60'],
  },
  {
    imageSrc: '/images/product8.jpg',
    title: 'Graphic Design',
    department: 'English Department',
    oldPrice: '24.99',
    newPrice: '14.99',
    colors: ['#C0392B', '#8E44AD', '#2980B9', '#27AE60'],
  },
];

const ProductCard = () => {
    return (
      <div className="px-4 py-8">
        <h2 className="text-xl md:text-2xl font-semibold text-center mb-4">Featured Products</h2>
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">BESTSELLER PRODUCTS</h1>
        <p className="text-center text-gray-600 mb-8">Problems trying to resolve the conflict between</p>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {products.map((product, index) => (
            <div 
              key={index}
              className="group relative flex flex-col items-center text-center bg-white w-full max-w-xs mx-auto overflow-hidden"
            >
              <div className="overflow-hidden">
                <img 
                  src={product.imageSrc}
                  alt={product.title}
                  className="h-128 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="py-4 transition-colors duration-300 group-hover:text-gray-500">
                <h3 className="text-base font-semibold mb-1">{product.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{product.department}</p>
                <div className="flex justify-center items-center mt-2 space-x-2">
                  <span className="text-sm text-gray-500 line-through">${product.oldPrice}</span>
                  <span className="text-sm text-green-600 font-semibold">${product.newPrice}</span>
                </div>
                <div className="flex justify-center items-center mt-2 space-x-2">
                  {product.colors.map((color, i) => (
                    <span
                      key={i}
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: color }}
                    ></span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default ProductCard;
