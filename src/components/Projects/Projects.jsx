import "./Projects.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import slide from "../assets/images/about1.jpg";

const Projects = () => {
  return (
    <div className="projects">
      <div className="border">
        <div className="projects_wrapper">
          <div className="projects_title">
            <h1>Projects</h1>
            <span></span>
          </div>
          <div className="slider">
            <Swiper
              pagination={{
                type: "progressbar",
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="slide_wrapper">
                  <div className="slide_img">
                    <img src={slide} alt="slide" />
                  </div>
                  <div className="slide_text">
                    <div className="slide_title">
                      <h1>Slide Name</h1>
                      <h3>Two word about project</h3>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Corrupti eum provident, rem laboriosam minima non
                        fugiat nihil debitis consectetur sequi quidem voluptas
                        qui nobis amet sint maxime. Vel, distinctio officiis!
                      </p>
                    </div>

                    <div className="slide_info">
                      <p className="slide_row">
                        <span className="row_title">Location</span>
                        <span className="row_content">Lviv / Ukraine</span>
                      </p>

                      <p className="slide_row">
                        <span className="row_title">Platforms</span>
                        <span className="row_content">
                          Mobile stack, Web stack
                        </span>
                      </p>

                      <p className="slide_row">
                        <span className="row_title">Technologies</span>
                        <span className="row_content">
                          .NET 4.6, WPF, MS SQL Server, Entity Framework, ASP
                          MVC 5, Web API, WPF, jQuery, Bootstrap, SOAP, REST,
                          webhooks, G Suite APIs, iOS, Android
                        </span>
                      </p>

                      <p className="slide_row">
                        <span className="row_title">Team</span>
                        <span className="row_content">
                          From 3 to 10+ people in 2 years
                        </span>
                      </p>
                    </div>
                    <div className="slide_btn">
                      <a href="/">SHOW</a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide_wrapper">
                  <div className="slide_img">
                    <img src={slide} alt="slide" />
                  </div>
                  <div className="slide_text">
                    <div className="slide_title">
                      <h1>Slide Name</h1>
                      <h3>Two word about project</h3>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Corrupti eum provident, rem laboriosam minima non
                        fugiat nihil debitis consectetur sequi quidem voluptas
                        qui nobis amet sint maxime. Vel, distinctio officiis!
                      </p>
                    </div>

                    <div className="slide_info">
                      <p className="slide_row">
                        <span className="row_title">Location</span>
                        <span className="row_content">Kyiv / Ukraine</span>
                      </p>

                      <p className="slide_row">
                        <span className="row_title">Platforms</span>
                        <span className="row_content">
                          Microsoft stack, Mobile stack, Other, Web stack
                        </span>
                      </p>

                      <p className="slide_row">
                        <span className="row_title">Technologies</span>
                        <span className="row_content">
                          C#, .NET Core, Entity Framework, MS SQL, React, React
                          Native, Wowza Streaming Engine, Mandrill API, CDNs,
                          iOS (Swift), Android (Java), PHP, Wordpress, AWS
                        </span>
                      </p>

                      <p className="slide_row">
                        <span className="row_title">Team</span>
                        <span className="row_content">
                          7 team members at different project stages
                        </span>
                      </p>
                    </div>
                    <div className="slide_btn">
                      <a href="/">SHOW</a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide_wrapper">
                  <div className="slide_img">
                    <img src={slide} alt="slide" />
                  </div>
                  <div className="slide_text">
                    <div className="slide_title">
                      <h1>Slide Name</h1>
                      <h3>Two word about project</h3>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Corrupti eum provident, rem laboriosam minima non
                        fugiat nihil debitis consectetur sequi quidem voluptas
                        qui nobis amet sint maxime. Vel, distinctio officiis!
                      </p>
                    </div>

                    <div className="slide_info">
                      <p className="slide_row">
                        <span className="row_title">Location</span>
                        <span className="row_content">Lviv / Ukraine</span>
                      </p>

                      <p className="slide_row">
                        <span className="row_title">Platforms</span>
                        <span className="row_content">
                          Mobile stack, Web stack
                        </span>
                      </p>

                      <p className="slide_row">
                        <span className="row_title">Technologies</span>
                        <span className="row_content">
                          .NET 4.6, WPF, MS SQL Server, Entity Framework, ASP
                          MVC 5, Web API, WPF, jQuery, Bootstrap, SOAP, REST,
                          webhooks, G Suite APIs, iOS, Android
                        </span>
                      </p>

                      <p className="slide_row">
                        <span className="row_title">Team</span>
                        <span className="row_content">
                          From 3 to 10+ people in 2 years
                        </span>
                      </p>
                    </div>
                    <div className="slide_btn">
                      <a href="/">SHOW</a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide_wrapper">
                  <div className="slide_img">
                    <img src={slide} alt="slide" />
                  </div>
                  <div className="slide_text">
                    <div className="slide_title">
                      <h1>Slide Name</h1>
                      <h3>Two word about project</h3>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Corrupti eum provident, rem laboriosam minima non
                        fugiat nihil debitis consectetur sequi quidem voluptas
                        qui nobis amet sint maxime. Vel, distinctio officiis!
                      </p>
                    </div>

                    <div className="slide_info">
                      <p className="slide_row">
                        <span className="row_title">Location</span>
                        <span className="row_content">Kyiv / Ukraine</span>
                      </p>

                      <p className="slide_row">
                        <span className="row_title">Platforms</span>
                        <span className="row_content">
                          Microsoft stack, Mobile stack, Other, Web stack
                        </span>
                      </p>

                      <p className="slide_row">
                        <span className="row_title">Technologies</span>
                        <span className="row_content">
                          C#, .NET Core, Entity Framework, MS SQL, React, React
                          Native, Wowza Streaming Engine, Mandrill API, CDNs,
                          iOS (Swift), Android (Java), PHP, Wordpress, AWS
                        </span>
                      </p>

                      <p className="slide_row">
                        <span className="row_title">Team</span>
                        <span className="row_content">
                          7 team members at different project stages
                        </span>
                      </p>
                    </div>
                    <div className="slide_btn">
                      <a href="/">SHOW</a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
