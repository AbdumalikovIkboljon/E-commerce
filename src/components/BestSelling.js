import { bestSelling } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BestSelling = () => {
  return (
    <div className="max-w-[1116px] mx-auto px-3 mb-[168px]">
      <div className="text-center mb-[80px]">
        <span className="inline-block text-xs leading-6 tracking-wide text-black-300 uppercase mb-2">
          Shop Now
        </span>
        <h3>Best Selling</h3>
      </div>
      <ul className="flex flex-wrap justify-center gap-5">
        {bestSelling.map(({ id, image, name, price, inStock }) => (
          <li key={id} className="py-4 px-2">
            <Link href="/product/1">
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

export default BestSelling;
