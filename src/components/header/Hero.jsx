import heroImg1 from "../../assets/Hero/2.png";
import heroImg2 from "../../assets/Hero/lgFreeze.png";
import heroImg3 from "../../assets/Hero/applelaptop.png";
import { EffectFade, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

const Hero = () => {
  return (
    <div className="gadgetContainer lg:h-[600px]  bg-gradient-to-r from-[#F9F3F0] from-10% via-[#FCE7DC] via-30% to-[#F9F3F0] to-90% dark:bg-gradient-to-r dark:from-[#f2f2d8] dark:from-10% dark:via-[#FCE7DC] dark:via-30% dark:to-[#fae1d4]">
      <Swiper
        effect={"fade"}
        fadeEffect={{ crossFade: true }}
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade]}
        className="mySwiper"
      >
        {/* slide 1 */}
        <SwiperSlide>
          <div className="md:h-[500px] h-auto">
            <div className="h-full flex flex-col md:flex-row justify-between md:gap-2 gap-10 items-center">
              <div className="flex-1 mt-10 md:mt-0 w-full md:w-auto">
                <p className="font-semibold text-[#FF497C] mb-3 text-center md:text-left">
                  <span className="bg-[#FF497C] text-white mr-3 text-xl px-2 py-1 rounded-full">
                    <i className="bx bxs-hot"></i>
                  </span>
                  Top Brands
                </p>

                <p className="xl:text-[50px] lg:text-[40px] md:text-[32px] text-[30px] font-bold text-center md:text-left">
                  Discover the Future <br />
                  of Electronics
                </p>
                <p className="font-medium text-black/60 md:text-lg text-center md:text-left">
                  Stay ahead with the latest tech trends and innovations.
                </p>

                <div className="flex justify-center md:justify-start">
                  <button className="bg-[#FF497C] py-2 mt-5 px-3 rounded text-white font-semibold hover:bg-[#ab3154]">
                    <span className="mr-3">
                      <i className="bx bx-hive"></i>
                    </span>
                    Explore Now
                  </button>
                </div>
              </div>

              {/* left */}
              <div className="w-full md:max-h-[400px] h-[250px] flex-1 mb-10 md:mb-0">
                <img
                  className="h-full object-cover w-full"
                  src={heroImg1}
                  alt=""
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* slide 2 */}
        <SwiperSlide>
          <div className="md:h-[500px] h-auto">
            <div className="h-full flex flex-col md:flex-row justify-between md:gap-2 gap-10 items-center">
              <div className="flex-1 mt-10 md:mt-0 w-full md:w-auto">
                <p className="font-semibold text-[#FF497C] mb-3 text-center md:text-left">
                  <span className="bg-[#FF497C] text-white mr-3 text-xl px-2 py-1 rounded-full">
                    <i className="bx bxs-hot"></i>
                  </span>
                  Top Brands
                </p>

                <p className="xl:text-[50px] lg:text-[40px] md:text-[32px] text-[30px] font-bold text-center md:text-left">
                  Your Trusted Source for <br />
                  Quality Gadgets
                </p>
                <p className="font-medium text-black/60 md:text-lg text-center md:text-left">
                  Explore a wide range of cutting-edge electronic devices
                </p>

                <div className="flex justify-center md:justify-start">
                  <button className="bg-[#FF497C] py-2 mt-5 px-3 rounded text-white font-semibold hover:bg-[#ab3154]">
                    <span className="mr-3">
                      <i className="bx bx-hive"></i>
                    </span>
                    Explore Now
                  </button>
                </div>
              </div>

              {/* left */}
              <div className="w-full md:max-h-[400px]  flex-1 mb-10 md:mb-0">
                <img
                  className="md:h-full h-[250px] object-cover w-full"
                  src={heroImg2}
                  alt=""
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* slide 3 */}
        <SwiperSlide>
          <div className="md:h-[500px] h-auto">
            <div className="h-full flex flex-col md:flex-row justify-between md:gap-2 gap-10 items-center">
              <div className="flex-1 mt-10 md:mt-0 w-full md:w-auto">
                <p className="font-semibold text-[#FF497C] mb-3 text-center md:text-left">
                  <span className="bg-[#FF497C] text-white mr-3 text-xl px-2 py-1 rounded-full">
                    <i className="bx bxs-hot"></i>
                  </span>
                  Top Brands
                </p>

                <p className="xl:text-[50px] lg:text-[40px] md:text-[32px] text-[30px] font-bold text-center md:text-left">
                Shop Smart, Shop <br /> TechWonders 
                
                </p>
                <p className="font-medium text-black/60 md:text-lg text-center md:text-left">
                Find the perfect tech solutions for your lifestyle.
                </p>

                <div className="flex justify-center md:justify-start">
                  <button className="bg-[#FF497C] py-2 mt-5 px-3 rounded text-white font-semibold hover:bg-[#ab3154]">
                    <span className="mr-3">
                      <i className="bx bx-hive"></i>
                    </span>
                    Explore Now
                  </button>
                </div>
              </div>

              {/* left */}
              <div className="w-full max-h-[400px] flex-1 mb-10 md:mb-0">
                <img
                  className="h-full object-cover w-full"
                  src={heroImg3}
                  alt=""
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

    </div>
  );
};

export default Hero;
