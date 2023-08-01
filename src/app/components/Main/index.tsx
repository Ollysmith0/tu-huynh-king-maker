'use client';
import { useState } from 'react';
import Image from 'next/image';
import {
  Card,
  Favorite,
  GridTemplate,
  Header,
  IconSearch,
  IconWrapper,
  SliderWrapper,
  Wrapper,
} from './index.styled';
import bg from 'public/images/header/bg.webp';
import { AiFillHome, AiFillHeart, AiOutlineClockCircle, AiOutlineSearch } from 'react-icons/ai';
import CustomSwiper from '../Swiper';
import { sliderData, sliderDataProps } from '@/app/const/sliderData';
import { SwiperSlide } from 'swiper/react';
import iconHeart from 'public/images/header/icon_heart_disable.webp';
import iconHeartActive from 'public/images/header/icon_heart_active.webp';
import debounce from '@/app/utils/debounce';

const Main = () => {
  const [activeList, setActiveList] = useState(sliderData);
  const [activeTypelist, setActiveTypeList] = useState({
    home: true,
    heart: false,
    clock: false,
  });
  const [isShowSearch, setIsShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleActive = (id: number) => {
    setActiveList(
      activeList.map((i: sliderDataProps) => {
        if (i.id === id) {
          return {
            ...i,
            isActive: !i.isActive,
          };
        } else {
          return i;
        }
      }),
    );
  };

  const handleFilter = () => {
    if (!activeTypelist.heart) {
      setActiveList(
        activeList.filter((i: sliderDataProps) => {
          if (i.isActive === true) {
            return i;
          }
        }),
      );

      setActiveTypeList({
        home: false,
        clock: false,
        heart: true,
      });
    } else {
      setActiveList(sliderData);
      setActiveTypeList({
        ...activeTypelist,
        heart: false,
      });
    }
  };

  const handleHome = () => {
    setActiveList(sliderData);
    setActiveTypeList({
      heart: false,
      clock: false,
      home: true,
    });
  };

  const handleClock = () => {
    setActiveTypeList({
      heart: false,
      clock: !activeTypelist.clock,
      home: false,
    });
  };

  const handleSubmit = (value: string) => {
    setActiveList(
      activeList.filter((i: sliderDataProps) => {
        if (i.name.includes(value)) {
          return i;
        }
      }),
    );
  };

  return (
    <Wrapper
      style={{
        background: `url(${bg.src})`,
        minHeight: activeList.length <= 6 ? '950px' : 'unset',
      }}
    >
      <Header>
        <IconWrapper>
          <AiFillHome
            style={{ color: activeTypelist.home ? '#906f14' : '' }}
            onClick={() => handleHome()}
          />
          <AiFillHeart
            onClick={() => handleFilter()}
            style={{ color: activeTypelist.heart ? '#906f14' : '' }}
          />
          <AiOutlineClockCircle
            style={{ color: activeTypelist.clock ? '#906f14' : '' }}
            onClick={() => handleClock()}
          />
        </IconWrapper>
        <IconSearch>
          <AiOutlineSearch />
          {/* <AiOutlineSearch onClick={() => setIsShowSearch(!isShowSearch)} /> */}
          {isShowSearch ? (
            <form onSubmit={() => handleSubmit}>
              <input
                value={searchValue}
                name="search"
                onChange={(e) => debounce(setSearchValue(e.target.value))}
              />
            </form>
          ) : null}
        </IconSearch>
      </Header>
      <SliderWrapper>
        <CustomSwiper slidesPerView={activeList.length < 7 ? activeList.length : 7.5}>
          {activeList.length ? (
            activeList.map((item) => (
              <SwiperSlide key={item.id} onClick={() => handleActive(item.id)}>
                <Image src={item.name.src} alt="item" layout="fill" />
                <Image
                  src={item.isActive === true ? iconHeartActive.src : iconHeart.src}
                  alt="heart-icon"
                  width={45}
                  height={45}
                  className="heart"
                />
              </SwiperSlide>
            ))
          ) : (
            <Favorite>There are no Favorite Games Here</Favorite>
          )}
        </CustomSwiper>
      </SliderWrapper>
      <GridTemplate>
        {activeList.length ? (
          activeList.map((item: sliderDataProps) => (
            <Card onClick={() => handleActive(item.id)}>
              <Image src={item.name.src} alt="card-img" width={200} height={300} />
              <Image
                src={item.isActive === true ? iconHeartActive.src : iconHeart.src}
                alt="heart-icon"
                width={45}
                height={45}
                className="heart"
              />
            </Card>
          ))
        ) : (
          <Favorite>There are no Favorite Games Here</Favorite>
        )}
      </GridTemplate>
    </Wrapper>
  );
};

export default Main;
