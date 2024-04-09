/* eslint-disable @next/next/no-img-element */
import { IoBagAddSharp } from "react-icons/io5";


interface ProductCardProps {
    imageUrl: string;
    productName: string;
    price: string;
    originalPrice: string;
  }

  const ProductCard: React.FC<ProductCardProps> = ({ imageUrl, productName, price, originalPrice }) => (
  <div className="w-72 bg-white shadow-md rounded-none duration-500 hover:scale-105 hover:shadow-xl">
    <a href="#">
      <img src={imageUrl} alt="Product" width={288} height={192} className="rounded-none h-80 w-72 object-cover" />
      <div className="px-4 py-3 w-72">
        <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
        <p className="text-lg font-bold text-black truncate block capitalize">{productName}</p>
        <div className="flex items-center">
          <p className="text-lg font-semibold text-black cursor-auto my-3">{price}</p>
          <del>
            <p className="text-sm text-gray-600 cursor-auto ml-2">{originalPrice}</p>
          </del>
          <div className="ml-auto">
          <IoBagAddSharp className="text-2xl" />

          </div>
        </div>
      </div>
    </a>
  </div>
);

export default ProductCard
