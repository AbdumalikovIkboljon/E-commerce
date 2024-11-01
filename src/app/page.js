import Button from "@/components/Button";
import Icon from "@/components/Icon";
import Image from "next/image";
import Services from "@/components/Services";
import BestSelling from "@/components/BestSelling";
import { womensTops } from "../../public";
export default function Home() {
  return (
    <section>
      <div className="bg-gray-100 mb-12">
        <div className="max-w-[1116px] flex flex-col justify-center items-center gap-4 medium:flex-row medium:items-center medium:justify-between pt-[68px] mx-auto px-3">
          <div className="flex flex-col items-center medium:items-start medium:pb-[70px]">
            <h2 className="mb-3 capitalize">Fresh arrivals online</h2>
            <p className="text-sm mb-12">
              Discover our newest collection today.
            </p>
            <Button variant="primary" className="flex gap-2">
              <span className="capitalize text-sm">View collection</span>
              <Icon name="arrowRight" size="w-6 h-6" color="white" />
            </Button>
          </div>
          <Image
            src="/hero-bg.svg"
            width={344}
            height={382}
            alt="hero image"
            className="w-[172px] h-[191px] sm:w-[258px] sm:h-[287px] medium:w-[344px] medium:h-[382px]"
          />
        </div>
      </div>
      <Services />
      <BestSelling />

      <div className="border-t border-b border-gray-100 pt-[52px] pb-[73px] bg-gradient-to-r from-gray-100 to-white mb-[152px]">
        <div className="max-w-[1116px] mx-auto px-3 relative">
          <div className="text-center md:text-left relative z-10">
            <h3 className="mb-6 text-2xl font-bold">
              Browse Our Fashion Paradise!
            </h3>
            <p className="text-sm text-black-500 mb-8">
              Step into a world of style and explore our diverse collection of
              <br /> clothing categories.
            </p>
            <Button variant="primary" className="flex gap-2 mx-auto md:mx-0">
              <span className="capitalize text-sm">Start browsing</span>
              <Icon name="arrowRight" size="w-6 h-6" color="white" />
            </Button>
          </div>
        {/* Image positioned absolutely on the right side */}
        <div className="absolute right-[40px] transform -translate-y-1/2 top-[31%] medium:top-[51%]">
          <Image
            src={womensTops} // Replace 'womensTops' with the actual image import or URL
            width={225}
            height={311}
            alt="Women's top cloth"
            className="w-[169px] h-[218px] medium:w-[225px] medium:h-[290px] md:object-contain"
            priority
          />
        </div>
        </div>

      </div>
    </section>
  );
}
