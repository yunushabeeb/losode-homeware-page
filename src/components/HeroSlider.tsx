import Slider from 'react-slick';
import { heroSlides } from '../lib/data';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true, // Enable fade transition
    arrows: false,
    appendDots: (dots: React.ReactNode) => (
      <div>
        <ul className="flex justify-center items-center gap-1 mt-4">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div
        className="custom-dot"
      />
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {heroSlides.map((slide, idx) => (
          <div key={idx}>
            <img
              src={slide}
              alt={`Slide ${idx + 1}`}
              height={550}
              loading="lazy"
              className="w-full h-[542px] object-cover object-top"
            />
          </div>
        ))}
      </Slider>
      {/* Custom dot styles */}
      <style>
        {`
          .custom-dot {
            width: 10px;
            height: 10px;
            border-radius: 9999px;
            background: #d1d5db;
            display: inline-block;
            transition: all 0.3s;
          }
          .slick-dots li.slick-active .custom-dot {
            width: 22px;
            height: 10px;
            border-radius: 9999px;
            background: #fff;
            box-shadow: 0 1px 4px rgba(0,0,0,0.08);
          }
          .slick-dots {
            position: absolute !important;
            bottom: 24px;
            left: 0;
            right: 0;
            margin: 0 auto;
            width: 100%;
            padding: 0;
          }
          .slick-dots li {
            margin: 0 3px !important;
          }
        `}
      </style>
    </div>
  );
};

export default HeroSlider;
