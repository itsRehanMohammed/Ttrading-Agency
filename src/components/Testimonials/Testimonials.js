import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useWidth } from "../../Global";
const Testimonials = () => {
  const width = useWidth();
  const testimonials = [
    {
      title: "Exceptional Trading Tips",
      review:
        "The trading tips provided by TradeKaro have been spot on! They've helped me make informed decisions and significantly improve my trading results.",
      author: "John Doe",
      position: "Full-time Trader",
      image: "https://dummyimage.com/106x106",
    },
    {
      title: "Highly Effective Packages",
      review:
        "The advisory packages are highly effective. The insights and strategies have been invaluable, making my trading experience smoother and more profitable.",
      author: "Jane Smith",
      position: "Financial Analyst",
      image: "https://dummyimage.com/106x106",
    },
    {
      title: "Excellent Support and Advice",
      review:
        "The support team is always available to provide excellent advice. Their guidance has been crucial in navigating the complexities of the trading market.",
      author: "Michael Johnson",
      position: "Investor",
      image: "https://dummyimage.com/106x106",
    },
    {
      title: "Great Advisory Service",
      review:
        "TradeKaro offers a great advisory service. Their tips and packages are comprehensive and have greatly contributed to my trading success.",
      author: "Emily Davis",
      position: "Day Trader",
      image: "https://dummyimage.com/106x106",
    },
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 pt-20 pb-10 mx-auto">
        <div className="text-center mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
            Client Reviews
          </h1>
        </div>
        <div className="flex flex-row items-center justify-center w-full  sm:w-1/2 mx-auto -m-4">
          <Swiper
            slidesPerView={width > 1000 ? 1.2 : 1}
            spaceBetween={20}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="p-4  w-full">
                  <div className="h-full bg-gray-100 p-8 rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="block w-5 h-5 text-gray-400 mb-4"
                      viewBox="0 0 975.036 975.036"
                    >
                      <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                    </svg>
                    <p className="leading-relaxed mb-6">{item.review}</p>
                    <a className="inline-flex items-center">
                      <div className="w-8 h-8 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      </div>
                      <span className="flex-grow flex flex-col pl-4">
                        <span className="title-font font-medium text-gray-900">
                          {item.author}
                        </span>
                        <span className="text-gray-500 text-sm">
                          {item.position}
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
