import Button from "@/components/Button";
import Icon from "@/components/Icon";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-100 mb-12">
      <div className="max-w-[1116px] flex flex-col justify-center items-center gap-4 medium:flex-row medium:items-center medium:justify-between pt-[68px] mx-auto px-4">
        <div className="flex flex-col items-center medium:items-start medium:pb-[70px]">
          <h2 className="mb-3 capitalize">Fresh arrivals online</h2>
          <p className="text-sm mb-12">Discover our newest collection today.</p>
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
  );
}
