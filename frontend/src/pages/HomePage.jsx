import React from "react";
import style from "../styles/HomePage.module.css";

import Navbar from "../components/Navbar";
const HomePage = () => {
  var arr = [
    {
      name: "Java",
      dis: "Start your coding career and become an industry-ready java in India's ever-growing technology job market.",
      courseTime: "3 Month",
      totleClass: "7",
      price: "₹349",
      img: "https://img-b.udemycdn.com/course/240x135/3740582_cc2c_7.jpg",
    },
    {
      name: "Learn Python",
      dis: "Start your coding career and become an industry-ready pyton in India's ever-growing technology job market.",
      courseTime: "1 Month",
      totleClass: "7",
      price: "₹249",
      img: "https://img-c.udemycdn.com/course/240x135/394676_ce3d_5.jpg",
    },
    {
      name: "Java Script",
      dis: "Start your coding career and become an industry-ready Full Stack Web Developer in India's ever-growing technology job market.",
      courseTime: "4 Month",
      totleClass: "7",
      price: " ₹449",
      img: "https://img-c.udemycdn.com/course/240x135/1743420_0062.jpg",
    },
  ];
  console.log(arr);
  return (
    <div>
      <Navbar />
      <div className={style.CourseMainDiv}>
        {arr.map((el) => {
          return (
            <div className={style.coursediv}>
              <div>
                <img src={el.img} alt="" />
              </div>
              <span className={style.name}>Course {el.name}</span>
              <br></br>
              <span className={style.Course}>Course {el.courseTime}</span>
              <br></br>

              <span className={style.class}>Course class {el.totleClass}</span>
              <p>{el.price}</p>
              <button className={style.buttonBuy}>Buy</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
