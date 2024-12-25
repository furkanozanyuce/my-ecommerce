import React, { useEffect } from 'react';
import PageContent from "../layout/PageContent";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { fetchProduct } from '../redux/actions/productActions';
import { addToCart } from '@/redux/actions/shoppingCartActions';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

function ProductDetailPage() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { selectedProduct, fetchState } = useSelector((state) => state.product);
  const { productId, gender, categoryName, categoryId } = useParams();

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [dispatch, productId]);

  if (fetchState === 'FETCHING') {
    return (
      <PageContent>
        <div className="flex justify-center items-center h-64">
          <div className="loader">Loading product...</div>
        </div>
      </PageContent>
    );
  }

  if (fetchState === 'ERROR' || !selectedProduct) {
    return (
      <PageContent>
        <div className="p-4">
          <h2 className="text-xl font-bold">Product not found</h2>
          <button
            onClick={() => history.goBack()}
            className="mt-4 bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
          >
            Go Back
          </button>
        </div>
      </PageContent>
    );
  }

  const product = selectedProduct;
  let productImages = product.images || [];
  if (productImages.length === 1) {
    productImages = Array(3).fill(productImages[0]);
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <PageContent>
      <div className="container mx-auto p-4 lg:p-8 font-monts">
        <button
          onClick={() => history.goBack()}
          className="mb-4 bg-gray-100 border px-3 py-1 rounded hover:bg-gray-200"
        >
          Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            {productImages && productImages.length > 0 ? (
              <Carousel className="relative w-full rounded-lg overflow-hidden border">
                <CarouselContent className="flex">
                  {productImages.map((img, index) => (
                    <CarouselItem
                      key={index}
                      className="relative w-full flex-shrink-0 "
                    >
                      <img
                        src={img.url}
                        alt={`Product Slide ${index}`}
                        className="w-full max-h-[800px] object-cover rounded-lg"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>

                <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-200 rounded-full p-1 hover:bg-gray-300">
                  Prev
                </CarouselPrevious>
                <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-200 rounded-full p-1 hover:bg-gray-300">
                  Next
                </CarouselNext>
              </Carousel>
            ) : (
              <div className="w-full h-[400px] bg-gray-200 flex items-center justify-center rounded-lg">
                <span>No Images</span>
              </div>
            )}
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <div className="flex items-center mb-4">
              <span className="text-yellow-500">
                {"★".repeat(Math.round(product.rating))}
                {"☆".repeat(5 - Math.round(product.rating))}
              </span>
              <span className="ml-2 text-gray-500">
                ({product.sell_count} reviews)
              </span>
            </div>
            <p className="text-2xl font-semibold text-blue-500 mb-2">
              ₺{product.price}
            </p>
            <p className="text-gray-500 mb-2">
              Availability:{" "}
              <span className="text-green-500">
                {product.stock > 0 ? "In Stock" : "Out of Stock"}
              </span>
            </p>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <button onClick={handleAddToCart} className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="mt-8 border-t pt-6">
          <div className="flex space-x-8 mb-4">
            <button className="text-blue-500 border-b-2 border-blue-500 pb-2">
              Description
            </button>
            <button className="text-gray-500 hover:text-blue-500">
              Additional Information
            </button>
            <button className="text-gray-500 hover:text-blue-500">
              Reviews (0)
            </button>
          </div>
          <p className="text-gray-600">
            {product.description}
          </p>
        </div>
      </div>
    </PageContent>
  );
}

export default ProductDetailPage;
