import "./Services.scss";
import dedicated from "../assets/images/dedicated.svg";
import web from "../assets/images/web.svg";
import mobile from "../assets/images/mobile.svg";
import software from "../assets/images/software.svg";
import ui from "../assets/images/ui.svg";
import quality from "../assets/images/quality.svg";
import application from "../assets/images/application.svg";
import embedded from "../assets/images/embedded.svg";
import net from "../assets/images/net.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Services = () => {
  return (
    <div className="services">
      <div className="border">
        <div className="services_title">
          <h1>Services</h1>
          <span></span>
        </div>
        <div className="services_list">
          <div className="services_block">
            <img src={dedicated} alt="dedicated" />
            <h1>Dedicated Team</h1>
            <h2>
              A dedicated team of software engineers will save your budget,
              increase production capacity, and performance. Check out Leobit’s
              Dedicated Team service and our three main models of custom
              software outsourcing.
            </h2>
          </div>
          <div className="services_block">
            <img src={web} alt="web" />
            <h1>Web Development</h1>
            <h2>
              If you have an online presence or product, having a web
              application is a must to retain your existing end-users. Learn
              more about Leobit’s web app development process, and how we ensure
              smooth cross-platform compatibility and cost-effectiveness of your
              web application.
            </h2>
          </div>
          <div className="services_block">
            <img src={mobile} alt="mobile" />
            <h1>Mobile Development</h1>
            <h2>
              With over 150 applications successfully delivered within the last
              5 years, Leobit’s mobile app developers will help you go mobile in
              the fastest and most efficient way.
            </h2>
          </div>
          <div className="services_block">
            <img src={software} alt="software" />
            <h1>Software Design</h1>
            <h2>
              Software architecture is essential for successful software
              development as it ensures future scalability and ease of
              maintenance for your product. Learn what kind of architecture
              design services Leobit offers.
            </h2>
          </div>
          <div className="services_block">
            <img src={ui} alt="ui" />
            <h1>UI / UX Design</h1>
            <h2>
              Our team of designers works with all the latest technologies and
              integrates into the software lifecycle seamlessly by hand-in-hand
              collaboration with developers. It creates synergy between all
              teams and makes the process more efficient and meaningful.
            </h2>
          </div>
          <div className="services_block">
            <img src={quality} alt="quality" />
            <h1>Quality Assurance</h1>
            <h2>
              Software quality control and testing is the only way to ensure
              your product success and seamless user experience. Discover the
              types and benefits of different testing services provided by
              Leobit.
            </h2>
          </div>
          <div className="services_block">
            <img src={application} alt="application" />
            <h1>Application Support and Maintenance</h1>
            <h2>
              After the product release, start application maintenance and
              support to optimize your app solution, reduce the risk of crashes,
              increase data security, and more.
            </h2>
          </div>
          <div className="services_block">
            <img src={embedded} alt="embedded" />
            <h1>Embedded Software Development</h1>
            <h2>
              Need to use IoT capabilities for your hardware product? Having
              experts with over 25 years of experience in embedded software
              development, Leobit can help you find a powerful and effective
              solution.
            </h2>
          </div>
          <div className="services_block">
            <img src={net} alt="net" />
            <h1>.NET Software Development Company</h1>

            <h2>
              As leading .NET development company, Leobit offers full range of
              .NET development services. Hire full-stack .NET developers either
              as a .NET Dedicated Development Team.
            </h2>
          </div>
        </div>
      </div>
      <div className="adapt_slider">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          
        >
          <div className="services_list">
            <SwiperSlide>
              <div className="services_block">
                <div className="service_adapt">
                  <img src={dedicated} alt="dedicated" />
                  <h1>Dedicated Team</h1>
                </div>
                <h2>
                  A dedicated team of software engineers will save your budget,
                  increase production capacity, and performance. Check out
                  Leobit’s Dedicated Team service and our three main models of
                  custom software outsourcing.
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="services_block">
                <div className="service_adapt">
                  <img src={web} alt="web" />
                  <h1>Web Development</h1>
                </div>
                <h2>
                  If you have an online presence or product, having a web
                  application is a must to retain your existing end-users. Learn
                  more about Leobit’s web app development process, and how we
                  ensure smooth cross-platform compatibility and
                  cost-effectiveness of your web application.
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="services_block">
                <div className="service_adapt">
                  <img src={mobile} alt="mobile" />
                  <h1>Mobile Development</h1>
                </div>
                <h2>
                  With over 150 applications successfully delivered within the
                  last 5 years, Leobit’s mobile app developers will help you go
                  mobile in the fastest and most efficient way.
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="services_block">
                <div className="service_adapt">
                  <img src={software} alt="software" />
                  <h1>Software Design</h1>
                </div>
                <h2>
                  Software architecture is essential for successful software
                  development as it ensures future scalability and ease of
                  maintenance for your product. Learn what kind of architecture
                  design services Leobit offers.
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="services_block">
                <div className="service_adapt">
                  <img src={ui} alt="ui" />
                  <h1>UI / UX Design</h1>
                </div>
                <h2>
                  Our team of designers works with all the latest technologies
                  and integrates into the software lifecycle seamlessly by
                  hand-in-hand collaboration with developers. It creates synergy
                  between all teams and makes the process more efficient and
                  meaningful.
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="services_block">
                <div className="service_adapt">
                  <img src={quality} alt="quality" />
                  <h1>Quality Assurance</h1>
                </div>
                <h2>
                  Software quality control and testing is the only way to ensure
                  your product success and seamless user experience. Discover
                  the types and benefits of different testing services provided
                  by Leobit.
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="services_block">
                <div className="service_adapt">
                  <img src={embedded} alt="embedded" />
                  <h1>Embedded Software Development</h1>
                </div>
                <h2>
                  Need to use IoT capabilities for your hardware product? Having
                  experts with over 25 years of experience in embedded software
                  development, Leobit can help you find a powerful and effective
                  solution.
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="services_block">
                <div className="service_adapt">
                  <img src={net} alt="net" />
                  <h1>.NET Software Development Company</h1>
                </div>
                <h2>
                  As leading .NET development company, Leobit offers full range
                  of .NET development services. Hire full-stack .NET developers
                  either as a .NET Dedicated Development Team.
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="services_block">
                <div className="service_adapt">
                  <img src={application} alt="application" />
                  <h1>Application Support and Maintenance</h1>
                </div>
                <h2>
                  After the product release, start application maintenance and
                  support to optimize your app solution, reduce the risk of
                  crashes, increase data security, and more.
                </h2>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Services;
