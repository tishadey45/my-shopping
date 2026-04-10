import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col-reverse lg:flex-row items-center">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Big Sale is Live 🔥
          </h1>
          <p className="text-lg mb-6">
            Discover the latest products with amazing discounts. Shop now and
            save big!
          </p>

         <Link href="/product">
          <button className=" text-white bg-indigo-700 font-semibold px-6 py-3 rounded-full  transition">
            Shop Now
          </button>
          </Link>
        </div>
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <Image
            src="/images/banner.png"
            alt="shopping"
            width={500}
            height={500}
            className="w-full max-w-md mx-auto rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}
