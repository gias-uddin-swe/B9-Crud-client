import img1 from "../../assets/Hero/applelaptop.png";
import img2 from "../../assets/Hero/sonycemera.png";
import img3 from "../../assets/Hero/lgMonitor.png";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const BrandAdvertise = () => {
  return (
    <div className="gadgetContainer lg:h-[600px]  bg-gradient-to-r from-[#F9F3F0] from-10% via-[#FCE7DC] via-30% to-[#F9F3F0] to-90% dark:bg-gradient-to-r dark:from-[#f2f2d8] dark:from-10% dark:via-[#FCE7DC] dark:via-30% dark:to-[#fae1d4]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {/* One */}
        <SwiperSlide>
          <div className="md:h-[600px] h-auto pb-5">
            <div className="h-full  flex flex-col md:flex-row justify-between md:gap-2 gap-10 items-center">
              {/* right */}
              <div className="w-full md:max-h-[400px] h-[250px] flex-1 mb-10 md:mb-0">
                <img className="h-full object-cover w-full" src={img1} alt="" />
              </div>
              {/* left */}
              <div className="flex-1 mt-10 md:mt-0 w-full md:w-auto relative">
                <div className="absolute p-5 w-40 h-40 flex justify-center items-center rounded-full bg-[#FF497C] md:top-40 top-16 md:right-10 right-0 ">
                  <p className="text-xl rounded-full text-white bg-[#FF497C] font-semibold text-center ">
                    New Price: <br /> 230$
                  </p>
                </div>

                <p className="xl:text-[50px] lg:text-[40px] md:text-[32px] text-[30px] font-bold text-center md:text-left">
                  Apple MacBook Air
                </p>
                <p className="font-bold text-xl my-3 text-center md:text-left">
                  Key Features
                </p>
                <p className="font-medium text-black/60 md:text-lg text-center md:text-left">
                  -MPN: MGN63 <br />
                  -Model: MacBook Air 13" M1 Chip <br />
                  -Processor: Apple M1 chip <br />
                  -RAM: 8GB, Storage: 256GB SSD <br />
                  -Display: 13.3-inch 2560x1600 Retina <br />
                  -Features:Backlit Magic Keyboard <br />
                </p>
                <p className="text-2xl font-semibold text-[#FF497C] mt-2 text-center md:text-left">
                  Old Price: 266$
                </p>

                <div className="flex justify-center md:justify-start">
                  <button className="bg-[#FF497C] py-2 mt-5 px-3 rounded text-white font-semibold hover:bg-[#ab3154]">
                    <span className="mr-3">
                      <i className="bx bxs-shopping-bag"></i>
                    </span>
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* Two */}
        <SwiperSlide>
          <div className="md:h-[600px] h-auto pb-5">
            <div className="h-full  flex flex-col md:flex-row justify-between space-x-5 md:gap-2 gap-2 items-center">
              {/* right */}
              <div className="w-full md:h-[400px] h-[250px] flex-1 mb-10 md:mb-0">
                <img className="h-full object-fill w-full" src={img2} alt="" />
              </div>
              {/* left */}
              <div className="flex-1 mt-10 md:mt-0 w-full md:w-auto relative">
              <div className="absolute p-5 w-40 h-40 flex justify-center items-center rounded-full bg-[#FF497C] md:top-40 top-16 md:right-10 right-0 ">
                  <p className="text-xl rounded-full text-white bg-[#FF497C] font-semibold text-center ">
                    New Price: <br /> 899$
                  </p>
                </div>
               

                <p className="xl:text-[50px] lg:text-[40px] md:text-[32px] text-[30px] font-bold text-center md:text-left">
                  Sony Alpha A6400
                </p>
                <p className="font-bold text-xl my-3 text-center md:text-left">
                  Key Features
                </p>
                <p className="font-medium text-black/60 md:text-lg text-center md:text-left">
                  - Model: Sony Alpha A6400 <br />
                  - 24.2MP APS-C Exmor CMOS Sensor <br />
                  - BIONZ X Image Processor <br />
                  - Real-Time Eye AF; <br />
                  - Real-Time Tracking XGA <br />
                  - Tru-Finder 2.36m-Dot OLED EVF <br />
                </p>
                <p className="text-2xl font-semibold text-[#FF497C] mt-2 text-center md:text-left">
                  Old Price: 1000$
                </p>

                <div className="flex justify-center md:justify-start">
                  <button className="bg-[#FF497C] py-2 mt-5 px-3 rounded text-white font-semibold hover:bg-[#ab3154]">
                    <span className="mr-3">
                      <i className="bx bxs-shopping-bag"></i>
                    </span>
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* Three */}
        <SwiperSlide>
          <div className="md:h-[600px] h-auto pb-5">
            <div className="h-full  flex flex-col md:flex-row justify-between space-x-5 md:gap-2 gap-2 items-center">
              {/* right */}
              <div className="w-full md:h-[400px] h-[250px] flex-1 mb-10 md:mb-0">
                <img className="h-full object-fill w-full" src={img3} alt="" />
              </div>
              {/* left */}
              <div className="flex-1 mt-10 md:mt-0 w-full md:w-auto relative">
              <div className="absolute p-5 w-40 h-40 flex justify-center items-center rounded-full bg-[#FF497C] md:top-40 top-16 md:right-10 right-0 ">
                  <p className="text-xl rounded-full text-white bg-[#FF497C] font-semibold text-center ">
                    New Price: <br /> 499$
                  </p>
                </div>
              

                <p className="xl:text-[50px] lg:text-[40px] md:text-[32px] text-[30px] font-bold text-center md:text-left">
                  LG 27UP600-W 27"
                </p>
                <p className="font-bold text-xl my-3 text-center md:text-left">
                  Key Features
                </p>
                <p className="font-medium text-black/60 md:text-lg text-center md:text-left">
                  - Model: 27UP600-W <br />
                  - Resolution: UHD (3840 x 2160) <br />
                  - Display: IPS,60Hz, 5ms GtG <br />
                  - Ports: HDMI, DP, Headphone Out <br />
                  - Features: Free, Flicker Free, <br />
                  - Smart Energy Saving <br />
                </p>
                <p className="text-2xl font-semibold text-[#FF497C] mt-2 text-center md:text-left">
                  Old Price: 599$
                </p>

                <div className="flex justify-center md:justify-start">
                  <button className="bg-[#FF497C] py-2 mt-5 px-3 rounded text-white font-semibold hover:bg-[#ab3154]">
                    <span className="mr-3">
                      <i className="bx bxs-shopping-bag"></i>
                    </span>
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BrandAdvertise;
