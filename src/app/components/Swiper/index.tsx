import { Swiper, SwiperProps } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

interface CustomSwiperProps extends SwiperProps {
  children: React.ReactNode;
}

const CustomSwiper = ({ children, ...props }: CustomSwiperProps) => {
  return <Swiper {...props}>{children}</Swiper>;
};

export default CustomSwiper;
