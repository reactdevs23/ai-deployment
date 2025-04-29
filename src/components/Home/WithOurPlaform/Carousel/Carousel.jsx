import React, { useEffect, useState } from "react";
import classes from "./Carousel.module.css";
import "./Carousel.css";
import clsx from "clsx";
import { FaStar } from "react-icons/fa";
import { FaCircleChevronRight, FaCircleChevronLeft } from "react-icons/fa6";
import { idogramAiImg, lumaImg, nvidiaImg, recraftAiImg } from "@/images";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Heading, Text } from "@/components/common";

const Carousel = ({ items }) => {
  // const [currentSlide, setCurrentSlide] = useState(0);

  // const [slidesToShow, setSlidesToShow] = useState(null);

  // useEffect(() => {
  //   const width = window.innerWidth;

  //   const handleResize = () => {
  //     if (width >= 1280) {
  //       setSlidesToShow(3.8);
  //     } else if (width <= 1199) {
  //       setSlidesToShow(2.9);
  //     } else if (width <= 991) {
  //       setSlidesToShow(2.2);
  //     } else if (width <= 767) {
  //       setSlidesToShow(1.9);
  //     } else if (width <= 575) {
  //       setSlidesToShow(1.1);
  //     } else {
  //       setSlidesToShow(3.7);
  //     }
  //   };

  //   window.addEventListener("resize", handleResize);
  //   handleResize(); // Set initial value

  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.9,
    arrows: false,
    slidesToScroll: 1,
    // prevArrow: <CustomPrevArrow currentSlide={currentSlide} />,
    // nextArrow: (
    //   <CustomNextArrow
    //     currentSlide={currentSlide}
    //     slideCount={generateImages.length}
    //     slidesToShow={slidesToShow}
    //   />
    // ),
    // beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3.9,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2.9,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2.6,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2.1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1.7,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1.4,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1.3,
        },
      },
    ],
  };

  return (
    <div className={classes.items}>
      <Slider {...settings}>
        {items?.map((item, i) => (
          <div key={i}>
            <div className={classes.item}>
              <img src={item.img} className={classes.img} alt="#" />

              <div className={classes.infoContainer}>
                <Heading base medium Blue600>
                  {item.name}
                </Heading>

                <Text sm primitive600 className={classes.info}>
                  {item.info.length > 91
                    ? item.info.slice(0, 91) + "..."
                    : item.info}
                </Text>
                <Text sm green medium className={classes.run}>
                  {item.run} run
                </Text>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
// const CustomPrevArrow = ({ currentSlide, slideCount, onClick }) => {
//   const isActive = currentSlide !== 0; // Check if current slide is not the first slide
//   return (
//     <button
//       onClick={onClick}
//       className={clsx(classes.nextButton, isActive && classes.activeButton)}
//     >
//       <FaCircleChevronLeft className={classes.arrow} />
//     </button>
//   );
// };

// const CustomNextArrow = ({
//   currentSlide,
//   slideCount,
//   onClick,
//   slidesToShow,
// }) => {
//   const isActive = currentSlide < slideCount - slidesToShow;

//   return (
//     <button
//       onClick={onClick}
//       className={clsx(classes.previousButton, {
//         [classes.activeButton]: isActive,
//       })}
//     >
//       <FaCircleChevronRight className={classes.arrow} />
//     </button>
//   );
// };
