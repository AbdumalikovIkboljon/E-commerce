"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/constants";

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("featured");

  return (
    <div className="max-w-[1116px] mx-auto px-3 mb-[192px]">
      {/* Tab Buttons */}
      <div className="flex gap-8 mb-8 max-w-[158px] mx-auto">
        <button
          className={`text-sm rounded-full py-1 border border-transparent px-4 ${
            activeTab === "featured"
              ? "text-black-800 font-medium border border-black-400"
              : "text-black-500"
          } transition-colors duration-200`}
          onClick={() => setActiveTab("featured")}
        >
          Featured
        </button>
        <button
          className={`text-sm rounded-full py-1 border border-transparent px-4 ${
            activeTab === "latest"
              ? "text-black-800 font-medium border border-black-400"
              : "text-black-500"
          } transition-colors duration-200`}
          onClick={() => setActiveTab("latest")}
        >
          Latest
        </button>
      </div>

      {/* Product Grid */}
      <ul className="flex flex-wrap justify-center gap-5">
        {products[activeTab].map(({ id, image, name, price, inStock }) => (
          <li key={id} className="py-4 px-2">
            <Link href={`/product/${id}`}>
              <Image
                src={image}
                alt={name}
                width={240}
                height={312}
                className="w-[180px] h-[234px] sm:w-[240px] sm:h-[312px] rounded-[4px] mb-6"
              />
              <p className="text-sm font-medium text-black-900 mb-3">{name}</p>
              <div className="flex items-center gap-4">
              <span className="uppercase text-xs leading-6 py-[2px] px-4 text-black-900 border border-black-100 rounded-full">
                  {inStock ? "In Stock" : "Out of Stock"}
                </span>
                <span className="text-black-600 text-sm tracking-wider">${price.toFixed(2)}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductTabs;
