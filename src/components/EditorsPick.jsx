import React from "react";

const EditorsPick = () => {
  const categories = [
    { id: 1, title: "Men", img: "https://s3-alpha-sig.figma.com/img/9da5/ab42/c0357746eb27e42fff6279478e2c8a48?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q07a0QU3hwnDwBlGs7mpjU02NDpEL9EsayONtNuaGb1ZoQFqXoNy~Fo560tMyRCRdIhdjoNEgYdZpVtd7sFt28vDUa1n1bTBFUAaYgM4K22dXyYQeKF4wFG4iAIleTyJs8ywNNoF4W68Hne9A0oOer-KkVhXV2kHeWBxzmh3zvfyMkn4wL7sbugQ6MorwMWBcaJxyVwRw~MdsPqoegfzerKzyzG04wXOvvdDCZiwOXg3-vIqJoY~SnIDlb4psbtm8jC-XUhKwMN9EGsXNeTyhJqEdi~cOFXuvjYAQQf9VPcprzaw7Y8e~GZEuWRSPrUZXgQuxitaGAnXtogLtX95ow__" },
    { id: 2, title: "Women", img: "https://s3-alpha-sig.figma.com/img/b384/eba6/08bd8616723a95d25fce7dcb8f25ba9d?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B5jsthpmJfEKk0b7u0-PoKFBOkG5Y6jMSty7BpIFgG38Q1y9l7iRyIHM7mw9YRVWUnlF8ol2ou9Ea1p657FJzGiTsRbYWHZKqCh4VReKZJL1q7~2AxEBUjUsmOaXlggFHTmaSBx3dPdM3IO-gmsz2OArr~CVTh5sNVQtb7g9J6QuLFVwD~Mn3iMqkD~7yrDRjatUqiYr4ZqxUHSxdh3hgLE4r~WrDSWLReojsg-Ih4nhnv49AWmcmcV680olONcCuQy4jkQd1k7goFeRT5NW~sq2mAnotnZTXNEKPxIuomt1XMTi2KEXWP37L73-0Nvk8tHxpj2rLZtbb6ZI5KTr8g__" },
    { id: 3, title: "Accessories", img: "https://s3-alpha-sig.figma.com/img/5077/f785/cbfd4a6cf9efad13d9b5d66b1b7cbf4f?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oyyMcLQcUKfX-csjPLBvzKh~CV0yFPxVq-rXZGCiB5D8JxtsjLV~6Bp9OZMnPI8xFBcwrhDd13CdGmyOIxipmKRCRxHt-r7S~duY5Mrtnz-thrOAoqmZFrg-UkwGc5i7fnMhSX8TPkeIyRMemtixtEKymXa4~FAxAyOXGJ8osTDDm050k2DpY3k~jQn1YxNSwW2TrHHVAUzPYoteb1Z7FQHWKBNFj1BKGm-6z42sfcVQw7OcrUdKd8TR8I1n-iKrvlYG1nGidFwinJjqFTeKKg4Ii~TnWIwfEFBD1yKD9kGFal9jOK0~fqAaQNqaewXRUo18ZnllAhCrcO6WP9ePEw__" },
  ];

  return (
    <div className="px-4 py-8 lg:px-16">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide">
          Editor's Pick
        </h2>
        <p className="text-sm text-gray-500">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="relative group cursor-pointer overflow-hidden"
          >
            {/* Image */}
            <img
              src={category.img}
              alt={category.title}
              className="w-full h-100 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-25 group-hover:bg-opacity-50 transition-all duration-300"></div>
            {/* Button */}
            <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-gray-900 font-medium px-4 py-2 text-sm rounded shadow-md group-hover:bg-gray-900 group-hover:text-white transition-colors duration-300">
              {category.title}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditorsPick;
