'use client';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  background-size: 100% 100% !important;
  background-repeat: no-repeat !important;

  height: 200px;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media only screen and (max-width: 1024px) {
    height: 245px;
    background-size: unset !important;
    background-position: center !important;
  }

  @media only screen and (max-width: 768px) {
    background-size: unset !important;
    background-position: center !important;
  }

  @media only screen and (max-width: 576px) {
    padding: 0 0.5rem;
  }
`;

export const IconCenter = styled.div`
  position: relative;
  height: 245px;
  width: 450px;
  cursor: pointer;

  @media only screen and (max-width: 1280px) {
    margin-bottom: 1rem;
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }

  & > .notice {
    position: absolute;
    left: 72%;
    top: 17%;
    z-index: 2;

    @media only screen and (max-width: 1280px) {
      left: 66%;
      top: 23%;
    }
  }

  & > .front {
    position: absolute;
    width: 384px;
    height: auto;
    top: 50%;
    left: 7%;

    z-index: 1;

    @media only screen and (max-width: 1680px) {
      left: 11%;
      width: 300px;
    }

    @media only screen and (max-width: 1440px) {
      left: 5%;
    }

    @media only screen and (max-width: 1280px) {
      left: 0;
    }

    @media only screen and (max-width: 1024px) {
      left: -2%;
    }
  }

  & > .back {
    position: absolute;
    width: 233px;
    height: 130px;
    top: 10%;
    left: 23%;

    @media only screen and (max-width: 1680px) {
      left: 20%;
    }

    @media only screen and (max-width: 1440px) {
      left: 15%;
    }

    @media only screen and (max-width: 1280px) {
      left: 17%;
      width: 200px;
      height: 100px;
      top: 22%;
    }

    @media only screen and (max-width: 1024px) {
      left: 14%;
    }

    @media only screen and (max-width: 768px) {
      left: 20%;
      width: 150px;
      height: 85px;
      top: -10%;
    }
  }

  & > .gem {
    position: absolute;
    width: 368px;
    height: 121px;
    top: 23%;
    left: 8%;

    @media only screen and (max-width: 1680px) {
      width: 315px;
      left: 10%;
    }

    @media only screen and (max-width: 1440px) {
      left: 4%;
    }

    @media only screen and (max-width: 1280px) {
      left: -4%;
      top: 30%;
    }

    @media only screen and (max-width: 1024px) {
      left: 1%;
      width: 284px;
      top: 25%;
    }
  }
`;

export const IconTop = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  height: 250px;
  cursor: pointer;

  @media only screen and (min-width: 769px) {
    display: none;
  }

  & > .notice {
    position: absolute;
    left: 72%;
    top: 17%;
    z-index: 2;

    @media only screen and (max-width: 768px) {
      width: 30px;
      height: auto;
      top: -8%;
      left: 64%;
    }
  }

  & > .front {
    position: absolute;
    width: 384px;
    height: auto;
    top: 50%;
    left: 7%;

    z-index: 1;

    @media only screen and (max-width: 768px) {
      width: 270px;
      top: 14%;
      left: 5%;
    }
  }

  & > .back {
    position: absolute;
    width: 233px;
    height: 130px;
    top: 10%;
    left: 23%;

    @media only screen and (max-width: 768px) {
      left: 25%;
      width: 150px;
      height: 85px;
      top: -12%;
    }
  }

  & > .gem {
    position: absolute;
    width: 368px;
    height: 121px;
    top: 23%;
    left: 8%;

    @media only screen and (max-width: 768px) {
      left: 7%;
      height: 100px;
      width: 250px;
      top: -3%;
    }
  }
`;

export const FlexColumn = styled.div`
  display: flex;
  justify-content: space-evenly;

  color: #fff;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva,
    Verdana, sans-serif;
  font-weight: 700;
  font-size: 1.5rem;

  @media only screen and (max-width: 1280px) {
    font-size: 1rem;
    margin-top: -2%;
  }

  @media only screen and (max-width: 1024px) {
    margin-top: 5%;
  }

  @media only screen and (max-width: 768px) {
    margin-top: 9%;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0 3rem;
  cursor: pointer;

  @media only screen and (max-width: 1680px) {
    margin: 0 2rem;
  }

  @media only screen and (max-width: 1440px) {
    margin: 0 1rem;
  }

  @media only screen and (max-width: 1280px) {
    margin: 0 1rem;
  }

  & > img {
    @media only screen and (max-width: 1280px) {
      width: 130px;
      height: 130px;
    }

    @media only screen and (max-width: 1024px) {
      width: 90px;
      height: 90px;
    }

    @media only screen and (max-width: 576px) {
      width: 70px;
      height: 70px;
    }
  }
`;

export const Name = styled.div`
  margin-top: 0.5rem;
  text-align: center;
`;
