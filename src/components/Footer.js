import Image from "next/image";
import Link from "next/link";
import React from "react";
import Icon from "./Icon";
import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-[1116px] mx-auto px-3">
        <div className="flex flex-wrap justify-between gap-6 border-b border-slate-300 py-8 lg:py-16 ">
          {/* Logo and Social Links */}
          <div className="w-full flex-0 sm:w-[272px]">
            <Link className="mb-4 block" href="/">
              <Image
                src="/header-logo.svg"
                width={168}
                height={44}
                alt="Site logo"
                priority
              />
            </Link>
            <p className="text-sm leading-6 mb-6 text-[#717171]">
              DevCut is a YouTube channel for <br /> practical project-based learning.
            </p>

            <div className="flex items-center gap-6">
              <Link href="/">
                <Icon name="gitHub" />
              </Link>
              <Link href="/">
                <Icon name="instagram" />
              </Link>
              <Link href="/">
                <Icon name="youTube" />
              </Link>
            </div>
          </div>

          {/* Footer Links */}
          <div className="flex flex-2 flex-wrap sm:flex-nowrap gap-[72px]">
            {footerLinks.map((link) => (
              <div className="text-[#aaa] flex flex-col gap-2" key={link.id}>
                <h3 className="font-bold mb-2 text-base lg:text-lg">{link.title}</h3>
                {link.links.map((item) => (
                  <Link key={item.id} href={item.url} className="text-gray-500 text-sm">
                    {item.title}
                  </Link>
                ))}
              </div>
            ))}
          </div>

          {/* Payment Methods */}
          <div className="flex-0 flex flex-col items-start justify-start lg:ml-auto">
            <h3 className="uppercase text-[#aaa] mb-4 lg:mb-10 text-sm lg:text-base">
              Accepted payments
            </h3>
            <div className="flex items-center gap-4 lg:gap-8">
              <Link href="/">
                <Image
                  src="/Mastercard.svg"
                  width={30}
                  height={32}
                  alt="Mastercard logo"
                  priority
                />
              </Link>
              <Link href="/">
                <Image
                  src="/Amex.svg"
                  width={52}
                  height={32}
                  alt="Amex logo"
                  priority
                />
              </Link>
              <Link href="/">
                <Image
                  src="/Visa.svg"
                  width={42}
                  height={32}
                  alt="Visa logo"
                  priority
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <p className="text-center py-4 lg:py-7 text-sm lg:text-base">
          © 2024 DevCut. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
