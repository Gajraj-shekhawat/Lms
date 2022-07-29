import React from "react";
import style from "../styles/HomePage.module.css";

import Navbar from "../components/Navbar";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import arr from "../Data/course.json"

const HomePage = () => {


  const set = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    showThumbs: false,
    showStatus: false,
  };
  const navigate = useNavigate();
  const courseBuy = (course) => {
    navigate(`/signup/${course}`);
  };
  return (
    <div>
      <Navbar />
      <div style={{ height: "380px", marginTop: "40px" }}>
        <Carousel {...set}>
          <div className={style.CarouselDiv}>
            <img
              src="https://www.chandigarhhelp.com/wp-content/uploads/2020/01/Top-Java-Training-Institutes-in-Chandigarh.jpg"
              alt=""
            />
          </div>
          <div className={style.CarouselDiv}>
            <img className={style.image}
              src="https://www.wscubetech.com/images/Python-Training.jpg"
              alt=""
            />
          </div>
          <div className={style.CarouselDiv}>
            <img className={style.image}
              src="https://www.bbvaapimarket.com/wp-content/uploads/2016/01/bbva-open4u-javascript.jpg"
              alt=""
            />
          </div>
        </Carousel>
      </div>
      <div className={style.CourseMainDiv}>
        {arr.map((el, i) => {
          return (
            <div className={style.coursediv} key={i}>
              <div>
                <img src={el.img} alt="" />
              </div>
              <span className={style.name}>Course {el.name}</span>
              <br></br>
              <span className={style.Course}>Course {el.courseTime}</span>
              <br></br>

              <span className={style.class}>Course class {el.totleClass}</span>
              <p>{el.price}</p>
              <button
                className={style.buttonBuy}
                onClick={() => {
                  courseBuy(el.name);
                }}
              >
                Buy
              </button>
            </div>
          );
        })}
      </div>
      <Footer/>
    </div>
  );
};

export default HomePage;
