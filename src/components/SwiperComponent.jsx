// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "../index.css";

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

export default function SwiperComponent() {
  return (
    <div className="aspect-square md:aspect-[5/4] lg:aspect-[8/3] relative">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        // navigation={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        rewind={true}
        autoplay={{ delay: 5000 }} // Autoplay with 3 seconds delay
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="layout bg-gradient-to-b lg:bg-gradient-to-l from-transparent via-60% lg:via-90% via-stone-800/80 to-stone-800 h-full w-full absolute top-0 left-0 z-20"></div>
          <div className="bg-game-image1 bg-cover bg-center h-full ">
            <div className="flex w-full h-full container m-auto relative z-30">
              <div className=" text-white flex-1 flex items-end p-10  lg:p-0 lg:items-center justify-center mx-4 w-6/12 lg:w-auto">
                <div className="text-center lg:text-left flex flex-col gap-4 w-3/5">
                  <div className="2xl:text-4xl lg:text-2xl lg:text:xl logo font-bold">
                    Logo
                  </div>
                  <h3 className="2xl:text-2xl lg:text-xl lg:text:lg">
                    Shapes Of Play
                  </h3>
                  <h5 className="lg:text-base lg:text:sm">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Libero nisi, laudantium voluptas vitae accusamus natus earum
                    unde sed a architecto.
                  </h5>
                </div>
              </div>
              <div className="text-3xl hidden lg:block text-white flex-1"></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="layout bg-gradient-to-b lg:bg-gradient-to-l from-transparent via-60% lg:via-90% via-stone-800/80 to-stone-800 h-full w-full absolute top-0 left-0 z-20"></div>
          <div className="bg-game-image2 bg-cover bg-center h-full ">
            <div className="flex w-full h-full container m-auto relative z-30">
              <div className=" text-white flex-1 flex items-end p-10  lg:p-0 lg:items-center justify-center mx-4 w-6/12 lg:w-auto">
                <div className="text-center lg:text-left flex flex-col gap-4 w-3/5">
                  <div className="2xl:text-4xl lg:text-2xl lg:text:xl logo font-bold">
                    Logo2
                  </div>
                  <h3 className="2xl:text-2xl lg:text-xl lg:text:lg">
                    Shapes Of Play
                  </h3>
                  <h5 className="lg:text-base lg:text:sm">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Libero nisi, laudantium voluptas vitae accusamus natus earum
                    unde sed a architecto.
                  </h5>
                </div>
              </div>
              <div className="text-3xl hidden lg:block text-white flex-1"></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="layout bg-gradient-to-b lg:bg-gradient-to-l from-transparent via-60% lg:via-90% via-stone-800/80 to-stone-800 h-full w-full absolute top-0 left-0 z-20"></div>
          <div className="bg-game-image3 bg-cover bg-center h-full ">
            <div className="flex w-full h-full container m-auto relative z-30">
              <div className=" text-white flex-1 flex items-end p-10  lg:p-0 lg:items-center justify-center mx-4 w-6/12 lg:w-auto">
                <div className="text-center lg:text-left flex flex-col gap-4 w-3/5">
                  <div className="2xl:text-4xl lg:text-2xl lg:text:xl logo font-bold">
                    Logo3
                  </div>
                  <h3 className="2xl:text-2xl lg:text-xl lg:text:lg">
                    Shapes Of Play
                  </h3>
                  <h5 className="lg:text-base lg:text:sm">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Libero nisi, laudantium voluptas vitae accusamus natus earum
                    unde sed a architecto.
                  </h5>
                </div>
              </div>
              <div className="text-3xl hidden lg:block text-white flex-1"></div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
