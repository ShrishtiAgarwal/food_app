import React from "react";
import Slider from "react-slick";
import customer1 from "../../assets/images/customer1.jpg";
import customer2 from "../../assets/images/customer2.jpg";
import customer3 from "../../assets/images/customer3.jpg";
import customer4 from "../../assets/images/customer4.jpg";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p>
          This cozy restaurant has left the best impressions! Hospitable hosts,
          delicious dishes, beautiful presentation, wide wine list and wonderful
          dessert. I recommend to everyone! I would like to come back here again
          and again.
        </p>
        <div className=" slider__content d-flex align-items-center gap-3">
          <img src={customer1} alt="customer_review" className="customer_pic w-25"/>
          <h6>Jhon Doe</h6>

        </div>
      </div>
      <div>
        <p>
          Excellent food. Menu is extensive and seasonal to a particularly high
          standard. Definitely fine dining. It can be expensive but worth it and
          they do different deals on different nights so it’s worth checking
          them out before you book. Highly recommended.
        </p>
        <div className=" slider__content d-flex align-items-center gap-3">
          <img src={customer2} alt="customer_review" className="customer_pic w-25" />
          <h6>Jhon Doe</h6>

        </div>{" "}
      </div>
      <div>
        <p>
          We are so fortunate to have this place just a few minutes drive away
          from home. Food is stunning, both the tapas and downstairs restaurant.
          Cocktails wow, wine great and lovely selection of beers. Love this
          place and will continue to visit.
        </p>
        <div className=" slider__content d-flex align-items-center gap-3">
          <img src={customer3} alt="customer_review"  className="customer_pic w-25"/>
          <h6>Jhon Doe</h6>

        </div>{" "}
      </div>
      <div>
        <p>
          Phenomenal experience. Top notch food, atmosphere, and wait staff.
          Have been here multiple times, and every time is an amazing experience
          all around. I always take my out of town guests here, as the food is
          always superb. Definitely a lifetime customer!
        </p>
        <div className=" slider__content d-flex align-items-center gap-3">
          <img src={customer4} alt="customer_review" className="customer_pic w-25" />
          <h6>Jhon Doe</h6>

        </div>{" "}
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
