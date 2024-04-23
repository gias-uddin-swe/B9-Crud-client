import { useEffect, useState } from "react";
import BrandCard from "../components/Cards/BrandCard";
import Hero from "../components/header/Hero";

// image
import choose1 from "../assets/whyChoose/1.webp";
import choose2 from "../assets/whyChoose/2.webp";
import choose3 from "../assets/whyChoose/3.webp";
import choose4 from "../assets/whyChoose/4.webp";
import choose5 from "../assets/whyChoose/5.webp";
import ProductCard from "../components/Cards/ProductCard";
import { baseURL } from "../utilitis/Url";

const HomePage = () => {
  const [brands, setBrands] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [brandLoading, setBrandLoading] = useState(false);
  useEffect(() => {
    // brands
    setBrandLoading(true)
    fetch(`${baseURL}/brands`)
      .then((res) => res.json())
      .then((data) => {
        setBrandLoading(false)
        setBrands(data)
      });

    // all products
    fetch(`${baseURL}/products`)
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);
  return (
    <div className="">
      <Hero />

      <div className="gadgetContainer">
        {/* header */}
        <div className="text-center md:text-left mt-16">
          <p className="font-semibold text-[#FF497C] mb-3 text-center md:text-left">
            <span className="bg-[#FF497C] text-white mr-3 text-xl px-2 py-1 rounded-full">
              <i className="bx bxs-category"></i>
            </span>
            Top Brands
          </p>
          <p className="text-[32px] lg:text-[40px] font-semibold dark:text-white">
            Browse By Brands
          </p>
        </div>

        {/* grid grid-cols-5 gap-4  dark:bg-[#0F172A] */}
        <div className=" grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3  xl:grid-cols-5 gap-5  mt-10 w-full ">
          {
            brandLoading && <p className="font-bold mt-4 text-2xl">Brand Loading...</p>
          }
          {brands?.map((brand) => (
            <BrandCard key={brand.id} brand={brand} />
          ))}
        </div>
        </div>
        {/* Explore our product */}
        <div className="gadgetContainer">
          {/* header */}
          <div className="text-center md:text-left mt-20">
            <p className="font-semibold text-[#FF497C] mb-3 text-center md:text-left">
              <span className="bg-[#FF497C] text-white mr-3 text-xl px-2 py-1 rounded-full">
                <i className="bx bxs-shopping-bag"></i>
              </span>
              Our Products
            </p>
            <p className="text-[32px] lg:text-[40px] font-semibold dark:text-white">
              Explore Our Product
            </p>
          </div>

          {/* Product container */}
          <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-4 mt-10">
            {allProducts?.length > 8
              ? allProducts
                  ?.slice(0, 8)
                  .map((item) => <ProductCard key={item._id} item={item} />)
              : allProducts?.map((item) => (
                  <ProductCard key={item._id} item={item} />
                ))}
          </div>
          {allProducts?.length > 8 && (
            <div className="mt-10 flex justify-center">
              <button className="text-white bg-[#FF497C] border-0 py-2 px-6 focus:outline-none hover:bg-[#ab3154] rounded font-semibold duration-200">
                See All
              </button>
            </div>
          )}
        </div>

        {/* Testimonials */}
        <div className="gadgetContainer py-24 mt-20 bg-gradient-to-r from-[#F9F3F0] from-10% via-[#FCE7DC] via-30% to-[#F9F3F0] to-90% dark:bg-gradient-to-r dark:from-[#0F172A] dark:from-10% dark:via-[#0F172A] dark:via-30% dark:to-[#0F172A]">
          {/* header */}
          <div className="text-center md:text-left ">
            <p className="font-semibold text-[#FF497C] mb-3 text-center md:text-left">
              <span className="bg-[#FF497C] text-white mr-3 text-xl px-2 py-1 rounded-full">
              <i className='bx bxs-quote-single-left'></i>
              </span>
              Testimonial
            </p>
            <p className="text-[32px] lg:text-[40px] font-semibold dark:text-white">
              Users Feedback
            </p>
          </div>

          {/* Container */}
          <div className="text-gray-600 dark:text-gray-200 body-font">
  <div className="mx-auto mt-8">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/2 w-full ">
        <div className="h-full bg-gray-100 dark:bg-[#1a2641d5] p-8 shadow-lg rounded">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p className="leading-relaxed mb-6">I recently purchased the Apple MacBook Air, and I must say, I'm thoroughly impressed with this fantastic piece of technology. From its design to its performance, it has exceeded my expectations in every way.</p>
          <a className="inline-flex items-center">
            <img alt="testimonial" src="https://i.ibb.co/TKYdH3g/girl1.jpg" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium text-gray-900 dark:text-white">Mr X</span>
              <span className="text-gray-500 text-sm dark:text-gray-200">DEVELOPER</span>
            </span>
          </a>
        </div>
      </div>
      <div className="p-4 md:w-1/2 w-full">
        <div className="h-full bg-gray-100 dark:bg-[#1a2641d5] shadow-lg p-8 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p className="leading-relaxed  mb-6">The HP Pavilion series is a reliable and affordable line of laptops that are well-suited for everyday computing needs. While it may not be the most powerful or feature-packed laptop on the market, it offers good value for the price.</p>
          <a className="inline-flex items-center">
            <img alt="testimonial" src="https://i.ibb.co/n1KHYYp/boy1.png" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium text-gray-900 dark:text-white">Mr. Y</span>
              <span className="text-gray-500 dark:text-gray-200 text-sm">DESIGNER</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

          
        </div>
        {/* Why people choose us */}
        <div className="gadgetContainer">
          {/* header */}
          <div className="text-center md:text-left mt-20">
            <p className="font-semibold text-[#FF497C] mb-3 text-center md:text-left">
              <span className="bg-[#FF497C] text-white mr-3 text-xl px-2 py-1 rounded-full">
                <i className="bx bxs-like"></i>
              </span>
              Why Us
            </p>
            <p className="text-[32px] lg:text-[40px] font-semibold dark:text-white">
              Why People Choose Us
            </p>
          </div>

          {/* Container */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-8">
            <div className="py-6 px-2 shadow border flex justify-center items-center flex-col gap-4 dark:bg-[#1a2641d5]">
              <img src={choose1} alt="" />
              <p className="font-semibold text-lg text-center dark:text-white">
                Fast & Secure <br />
                Delivery
              </p>
            </div>
            <div className="py-6 px-2 shadow border flex justify-center items-center flex-col gap-4 dark:bg-[#1a2641d5]">
              <img src={choose2} alt="" />
              <p className="font-semibold text-lg text-center dark:text-white">
                Money Back <br />
                Guarantee
              </p>
            </div>
            <div className="py-6 px-2 shadow border flex justify-center items-center flex-col gap-4 dark:bg-[#1a2641d5]">
              <img src={choose3} alt="" />
              <p className="font-semibold text-lg text-center dark:text-white">
                24 Hour Return <br />
                Policy
              </p>
            </div>
            <div className="py-6 px-2 shadow border flex justify-center items-center flex-col gap-4 dark:bg-[#1a2641d5]">
              <img src={choose4} alt="" />
              <p className="font-semibold text-lg text-center dark:text-white">
                Pro Quality <br />
                Support
              </p>
            </div>
            <div className="py-6 px-2 shadow border flex justify-center items-center flex-col gap-4 dark:bg-[#1a2641d5]">
              <img src={choose5} alt="" />
              <p className="font-semibold text-lg text-center dark:text-white">
                Next Level Pro <br />
                Quality
              </p>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default HomePage;
