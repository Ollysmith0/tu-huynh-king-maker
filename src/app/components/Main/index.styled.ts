'use client';
import styled from 'styled-components';

export const Wrapper = styled.div`
  background-size: 100% 100% !important;
  background-repeat: no-repeat !important;
  height: 100vh;
  z-index: 0;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;
  z-index: 0;

  @media only screen and (max-width: 768px) {
    height: calc(100% - 310px);
    margin: 310px 0 190px 0;
  }

  @media only screen and (max-width: 576px) {
    height: calc(100% - 265px);
    margin: 265px 0 190px 0;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  width: 300px;
  height: 100px;
  background: #000;
  border-radius: 25px;
  margin-bottom: 2rem;

  svg {
    font-size: 4rem;
  }

  & > svg:first-child {
    color: white;
    cursor: pointer;
  }

  & > svg:nth-child(2) {
    color: white;
    cursor: pointer;
  }

  & > svg:last-child {
    color: white;
    cursor: pointer;
  }
`;

export const IconSearch = styled.div`
  margin-bottom: 2rem;
  width: 70px;
  height: 70px;
  cursor: pointer;

  background-color: #906f14;
  border-radius: 50%;
  margin-left: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 3rem;
    color: #fff;
  }
`;

export const SliderWrapper = styled.div`
  width: 100%;

  @media only screen and (max-width: 768px) {
    display: none;
  }

  .swiper-slide {
    height: 300px;
    width: 200px !important;
  }

  .heart {
    position: absolute;
    right: 0;
  }
`;

export const GridTemplate = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media only screen and (min-width: 769px) {
    display: none;
  }
`;

export const Card = styled.div`
  width: 200px;
  height: 300px;
  position: relative;

  .heart {
    position: absolute;
    right: 0;
  }
`;

export const Favorite = styled.div`
  font-size: 4rem;
  color: white;
  text-align: center;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva,
    Verdana, sans-serif;
  font-weight: 700;
`;
