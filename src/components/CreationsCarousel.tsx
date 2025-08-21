import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import CreationCard from './CreationCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Creation {
  id: number;
  title: string;
  description: string;
  image: string;
  type: string;
}

interface CreationsCarouselProps {
  creations: Creation[];
}

// Custom Arrow Components
const CustomPrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-primary/80 hover:bg-secondary/90 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group shadow-premium border border-accent/20"
    aria-label="Previous"
  >
    <ChevronLeft className="w-7 h-7 text-accent group-hover:scale-110 transition-transform" />
  </button>
);

const CustomNextArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-primary/80 hover:bg-secondary/90 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group shadow-premium border border-accent/20"
    aria-label="Next"
  >
    <ChevronRight className="w-7 h-7 text-accent group-hover:scale-110 transition-transform" />
  </button>
);

const CreationsCarousel: React.FC<CreationsCarouselProps> = ({ creations }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    pauseOnHover: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="relative">
      <style jsx global>{`
        .creations-carousel .slick-track {
          display: flex;
          align-items: center;
        }
        .creations-carousel .slick-slide {
          padding: 0 12px;
        }
        .creations-carousel .slick-slide > div {
          height: 100%;
        }
        .creations-carousel .slick-list {
          overflow: hidden;
          margin: 0 -12px;
        }
        .creations-carousel .slick-prev,
        .creations-carousel .slick-next {
          z-index: 10;
        }
        .creations-carousel .slick-prev:before,
        .creations-carousel .slick-next:before {
          display: none;
        }
      `}</style>
      
      <div className="creations-carousel">
        <Slider {...settings}>
          {creations.map((creation) => (
            <div key={creation.id}>
              <CreationCard
                title={creation.title}
                description={creation.description}
                image={creation.image}
                type={creation.type}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CreationsCarousel;