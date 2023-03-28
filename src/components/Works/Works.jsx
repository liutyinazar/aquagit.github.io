import "./Works.scss";
import about1 from "../assets/images/about1.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Works = () => {
  return (
    <div className="work">
      <div className="border">
        <div className="work_wrapper">
          <div className="work_title">
            <h1>Our works</h1>
          </div>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            // navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="work_image">
                <img src={about1} alt="about1" />
                <div className="work_text">
                  <h2>Slide Name</h2>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nulla minus perspiciatis veniam corporis ratione tenetur
                    rerum dolore ea enim officiis, eaque ipsum facilis
                    accusantium similique distinctio! Rem quaerat dignissimos
                    reprehenderit.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="work_image">
                <img src={about1} alt="about1" />
                <div className="work_text">
                  <h2>Slide Name</h2>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nulla minus perspiciatis veniam corporis ratione tenetur
                    rerum dolore ea enim officiis, eaque ipsum facilis
                    accusantium similique distinctio! Rem quaerat dignissimos
                    reprehenderit.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="work_image">
                <img src={about1} alt="about1" />
                <div className="work_text">
                  <h2>Slide Name</h2>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nulla minus perspiciatis veniam corporis ratione tenetur
                    rerum dolore ea enim officiis, eaque ipsum facilis
                    accusantium similique distinctio! Rem quaerat dignissimos
                    reprehenderit.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Works;
