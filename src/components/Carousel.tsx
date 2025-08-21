import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface CarouselItem {
  id: number;
  title: string;
  description: string;
  image: string;
  type: 'image' | 'video';
}

interface CarouselProps {
  items: CarouselItem[];
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

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    customPaging: () => (
      <div className="w-3 h-3 bg-primary/40 rounded-full hover:bg-secondary transition-colors duration-300" />
    ),
  };

  return (
    <div className="carousel-container">
      <style jsx global>{`
        .carousel-container .slick-dots {
          bottom: -60px;
        }
        .carousel-container .slick-dots li {
          margin: 0 6px;
        }
        .carousel-container .slick-dots li.slick-active div {
          background: var(--secondary);
          transform: scale(1.3);
        }
        .carousel-container .slick-prev,
        .carousel-container .slick-next {
          z-index: 1;
          width: 56px;
          height: 56px;
        }
        .carousel-container .slick-prev:before,
        .carousel-container .slick-next:before {
          display: none;
        }
        .carousel-container .slick-prev {
          left: -28px;
        }
        .carousel-container .slick-next {
          right: -28px;
        }
      `}</style>
      <Slider {...settings}>
        {items.map((item) => (
          <div key={item.id} className="px-4">
            <motion.div
              className="bg-gradient-to-br from-accent to-highlight/20 rounded-2xl overflow-hidden shadow-premium group border border-primary/10 hover:border-secondary/30 transition-all duration-500 card-hover"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-lg font-heading font-semibold text-accent mb-2">
                    {item.title}
                  </h3>
                  <p className="text-accent/80 font-body text-sm line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;