import React from "react";
import { services } from "@/constants";

const Services = () => {
  return (
    <div className="max-w-[1116px] mx-auto pb-12 mb-[72px] px-3">
      <ul className="grid grid-cols-1 gap-[54px] md:grid-cols-2 lg:grid-cols-3 py-12">
        {services.map(({ id, icon, title, description }) => (
          <li key={id} className="text-center w-full md:w-3/4 md:text-left">
            <span className="p-3 rounded-full bg-gray-100 inline-block mb-6">
              {icon}
            </span>
            <h5 className="mb-3">{title}</h5>
            <p className="text-sm text-black-500">{description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
