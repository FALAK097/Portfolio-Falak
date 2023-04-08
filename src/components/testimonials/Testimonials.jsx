import React from "react";
import "./Testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVTR1,
    name: "Aniket Shrungare",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga blanditiis doloremque laudantium id, repellat, autem vel illum quisquam labore debitis amet sapiente! Maiores ducimus officia laboriosam at dicta mollitia id.",
  },
  {
    avatar: AVTR2,
    name: "Poornaaditya Akul",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga blanditiis doloremque laudantium id, repellat, autem vel illum quisquam labore debitis amet sapiente! Maiores ducimus officia laboriosam at dicta mollitia id.",
  },
  {
    avatar: AVTR3,
    name: "Mayur Bharambe",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga blanditiis doloremque laudantium id, repellat, autem vel illum quisquam labore debitis amet sapiente! Maiores ducimus officia laboriosam at dicta mollitia id.",
  },
  {
    avatar: AVTR4,
    name: "Faisal Shah",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga blanditiis doloremque laudantium id, repellat, autem vel illum quisquam labore debitis amet sapiente! Maiores ducimus officia laboriosam at dicta mollitia id.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
      
        {
         data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
