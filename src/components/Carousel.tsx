import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
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

// Custom Arrow Components with elegant styling
const CustomPrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <motion.button
    onClick={onClick}
    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group shadow-elegant border border-white/20"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    aria-label="Previous"
  >
    <ChevronLeft className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
  </motion.button>
);

const CustomNextArrow = ({ onClick }: { onClick?: () => void }) => (
  <motion.button
    onClick={onClick}
    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group shadow-elegant border border-white/20"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    aria-label="Next"
  >
    <ChevronRight className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
  </motion.button>
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
    lazyLoad: 'ondemand' as const,
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
      <div className="w-3 h-3 bg-white/40 rounded-full hover:bg-white transition-colors duration-300" />
    ),
  };

  return (
    <div className="carousel-container gpu-accelerated">
      <style jsx global>{`
        .carousel-container .slick-dots {
          bottom: -60px;
        }
        .carousel-container .slick-dots li {
          margin: 0 8px;
        }
        .carousel-container .slick-dots li.slick-active div {
          background: white;
          transform: scale(1.3);
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
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
        .carousel-container .slick-track {
          display: flex;
          align-items: center;
        }
        .carousel-container .slick-slide {
          height: inherit;
        }
        .carousel-container .slick-slide > div {
          height: 100%;
        }
      `}</style>
      <Slider {...settings}>
        {items.map((item) => (
          <div key={item.id} className="px-4">
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-elegant group border border-white/20 hover:border-white/40 transition-all duration-500 card-hover h-full"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 lazy-image"
                  loading="lazy"
                  onLoad={(e) => e.currentTarget.classList.add('loaded')}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
                
                {/* Play Button for Videos */}
                {item.type === 'video' && (
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </motion.div>
                )}
                
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-lg font-heading font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/80 font-body text-sm line-clamp-2">
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