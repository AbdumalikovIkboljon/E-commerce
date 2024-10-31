import React from "react";
import CustomInput from "./CustomInput";
import Button from "./Button";

const Newsletter = () => {
  return (
    <div className="bg-gray-100 py-[60px]">
      <div className="max-w-[1116px] flex justify-center items-center flex-col md:flex-row md:items-center md:justify-between gap-6 mx-auto px-3 py-1">
        <div>
          <h3 className="mb-6">Join Our Newsletter</h3>
          <p className="text-black-500 text-sm">
            We love to surprise our subscribers with occasional gifts.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <CustomInput className='bg-transparent py-[10px] w-inherit sm:w-[320px] px-[15px] text-black-300 text-sm' type="email" placeholder="Your email address..." />
          <Button variant="primary">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
