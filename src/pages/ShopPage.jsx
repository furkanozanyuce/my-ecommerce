import React, { useEffect, useState } from 'react';
import PageContent from "../layout/PageContent";
import Categories from '../components/Categories';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function ShopPage() {
    const products = useSelector((state) => state.product.productList.products);

    const [view, setView] = useState('grid');
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(12);

    const totalProducts = products.length;
    const totalPages = Math.ceil(totalProducts / productsPerPage);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setProductsPerPage(12);
            } else {
                setProductsPerPage(4);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (currentPage > totalPages && totalPages !== 0) {
            setCurrentPage(totalPages);
        }
    }, [currentPage, totalPages]);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = Array.isArray(products) ? products.slice(indexOfFirstProduct, indexOfLastProduct) : [];

    const goToPage = (pageNum) => {
        if (pageNum >= 1 && pageNum <= totalPages) {
            setCurrentPage(pageNum);
        }
    };

    const goToPreviousPage = () => {
        goToPage(currentPage - 1);
    };

    const goToNextPage = () => {
        goToPage(currentPage + 1);
    };

    return (
        <div>
            <PageContent>
                <div className="px-4 py-6 lg:px-12 font-monts">
                    <Categories />
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 space-y-4 md:space-y-0">
                        <div>
                            <p className="text-gray-700 text-sm">Showing all {totalProducts} results</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                                <button
                                    onClick={() => setView('grid')}
                                    className={`p-2 border rounded ${view === 'grid' ? 'border-blue-600' : 'border-gray-300'} hover:border-blue-600`}
                                    aria-label="Grid View"
                                >
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                        <path d="M3 3h8v8H3zM3 13h8v8H3zM13 3h8v8h-8zM13 13h8v8h-8z" />
                                    </svg>
                                </button>
                                <button
                                    onClick={() => setView('list')}
                                    className={`p-2 border rounded ${view === 'list' ? 'border-blue-600' : 'border-gray-300'} hover:border-blue-600`}
                                    aria-label="List View"
                                >
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                        <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
                                    </svg>
                                </button>
                            </div>

                            <div className="relative">
                                <select className="border border-gray-300 rounded text-sm px-2 py-1">
                                    <option>Popularity</option>
                                    <option>Price: Low to High</option>
                                    <option>Price: High to Low</option>
                                    <option>Newest</option>
                                </select>
                            </div>

                            <button className="px-3 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded text-sm">
                                Filter
                            </button>
                        </div>
                    </div>

                    <div
                        className={
                            view === 'grid'
                                ? 'grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
                                : 'space-y-6'
                        }
                    >
                        {currentProducts.map((product) => (
                            <Link to={`/product/${product.id}`}>
                                <div
                                    key={product.id}
                                    className={`border border-gray-200 rounded group p-4 flex min-h-full ${view === 'list' ? 'flex-row space-x-4' : 'flex-col'
                                        } text-center`}
                                >
                                    {product.images.map((image, index) => (
                                        <img
                                            key={index}
                                            src={image.url}
                                            alt={`Product Image ${index}`}
                                            className={`${view === 'grid' ? 'mb-4' : 'w-32 h-40 object-cover'} rounded group-hover:scale-105`}
                                        />
                                    ))}
                                    <div className={`${view === 'grid' ? 'gap-1 items-center' : 'gap-2 justify-center items-start text-left'} flex flex-col`}>
                                        <h3 className="text-sm font-semibold text-gray-800 mb-1">{product.name}</h3>
                                        <p className="text-xs text-gray-500 mb-2">{product.description}</p>
                                        <div className="flex items-center space-x-2 mb-2">
                                            <span className="text-sm text-green-600 font-semibold">{product.price}</span>
                                            <span className="text-xs text-gray-400">Stok: {product.stock}</span>
                                        </div>
                                        <div className="flex space-x-1">
                                            {product.rating}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {totalPages > 1 && (
                        <div className="flex items-center justify-center mt-8 space-x-2 text-sm">
                            <button
                                onClick={goToPreviousPage}
                                disabled={currentPage === 1}
                                className={`px-3 py-1 border border-gray-300 rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'}`}
                            >
                                Previous
                            </button>

                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                                const isSelected = currentPage === pageNum;
                                return (
                                    <button
                                        key={pageNum}
                                        onClick={() => goToPage(pageNum)}
                                        className={`px-3 py-1 border border-gray-300 rounded ${isSelected
                                            ? 'bg-blue-600 text-white'
                                            : 'hover:bg-gray-100'
                                            }`}
                                    >
                                        {pageNum}
                                    </button>
                                );
                            })}

                            <button
                                onClick={goToNextPage}
                                disabled={currentPage === totalPages}
                                className={`px-3 py-1 border border-gray-300 rounded ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'}`}
                            >
                                Next
                            </button>
                        </div>
                    )}
                </div>
            </PageContent>
        </div>
    )
}

export default ShopPage;
