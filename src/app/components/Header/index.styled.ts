import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;

  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 160px;
  width: 100%;
  overflow: hidden;

  color: #fff;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva,
    Verdana, sans-serif;
  font-weight: 700;
  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  z-index: 1;

  @media only screen and (max-width: 576px) {
    height: auto;
  }
`;

export const LeftContent = styled.div`
  display: flex;
  align-items: center;

  background-size: 100% 100% !important;
  background-repeat: no-repeat !important;

  height: 60%;
  width: 35%;
`;

export const Avatar = styled.div`
  width: 6rem;
  height: 6rem;
  position: relative;
  background-size: cover;

  & > img {
    width: 100%;
    height: auto;
  }

  @media only screen and (max-width: 1980px) {
    display: block;
  }

  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

export const AvatarMobile = styled.div`
  width: 6rem;
  height: 6rem;
  position: relative;
  background-size: cover;

  & > img {
    width: 100%;
    height: auto;
  }

  @media only screen and (max-width: 1980px) {
    display: block;
  }

  @media only screen and (max-width: 1024px) {
    display: block;
    width: 130px;
  }

  @media only screen and (max-width: 576px) {
    width: 150px;
  }
`;

export const ProfileWrapper = styled.div`
  margin-left: 1rem;

  @media only screen and (max-width: 1980px) {
    border-radius: 50%;
    display: block;
  }

  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

export const ProfileFrameWrapper = styled.div`
  position: absolute;
  top: -25%;
  left: -25%;

  z-index: 1;
  width: 9rem;
  height: 9rem;
`;

export const CurrencyImageWrapper = styled.div`
  width: 4rem;
  height: 4rem;

  & > img {
    width: 100%;
    height: auto;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 0.5rem;

  @media only screen and (max-width: 1024px) {
    margin-right: 18%;
  }

  @media only screen and (max-width: 768px) {
    margin: 0 15% 0 0;
  }
`;

export const Level = styled.div`
  width: 3.5rem;
  border-radius: 10px;
  background-color: #000;
  padding: 0.3rem;
`;

export const Name = styled.div`
  margin-left: 0.5rem;
`;

export const Bets = styled.div`
  background-color: #000;
  border-radius: 10px;
  padding: 0.5rem 2rem;
  width: 11rem;

  @media only screen and (max-width: 768px) {
    margin-left: 20% !important;
  }
`;

export const CurrencyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;

export const Currency = styled.div`
  width: 12.5rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
  background-color: #000;
  border-radius: 15px;

  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 1440px) {
    width: 8rem;
  }

  @media only screen and (max-width: 1280px) {
    width: 6rem;
  }

  @media only screen and (max-width: 1024px) {
    width: 12.5rem;
  }

  @media only screen and (max-width: 768px) {
    width: 10.5rem;
  }

  @media only screen and (max-width: 576px) {
    width: 8.5rem;
  }
`;

export const Content = styled.div`
  text-align: center;
  margin-top: 2.5rem;
  color: #4b2700;
  font-size: 3rem;
  text-shadow:
    0 2px 3px #fff,
    0 -2px 3px yellow;

  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  @media only screen and (max-width: 1280px) {
    font-size: 2.5rem;
  }

  @media only screen and (max-width: 1024px) {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const RightContent = styled.div`
  display: flex;
  align-items: center;

  background-size: 100% 100% !important;
  background-repeat: no-repeat !important;

  height: 60%;
`;

export const MainPageWrapper = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: linear-gradient(180deg, #efd366 0%, #906f14 100%);
  background-size: 100% 100%;
  background-repeat: no-repeat;

  border-radius: 10px;
  height: 7rem;
  width: 8rem;
  margin: 0 1rem;
  max-width: 374px;
  overflow: hidden;

  outline: none;
  border: none;
  background-color: initial;
  color: #000;
  box-shadow: inset 0px 0px 5px 2px #fff;

  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva,
    Verdana, sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;

  @media only screen and (max-width: 1280px) {
    width: 6rem;
  }

  @media only screen and (max-width: 1024px) {
    height: 6rem;
    width: 7rem;
  }

  @media only screen and (max-width: 768px) {
    height: 6rem;
  }

  @media only screen and (max-width: 576px) {
    margin: 0;
  }
`;

export const DepositWrapper = styled.button`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 9rem;
  width: 18.75rem;

  outline: none;
  border: none;
  background-color: initial;
  color: #fff;
  cursor: pointer;

  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva,
    Verdana, sans-serif;
  font-weight: 700;

  @media only screen and (max-width: 1680px) {
    width: 15.75rem;
  }

  @media only screen and (max-width: 1440px) {
    width: 13.75rem;
  }

  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

export const MenuWrapper = styled.button`
  outline: none;
  border: none;
  background: initial;
  color: #fff;
  cursor: pointer;

  @media only screen and (max-width: 1280px) {
    margin-left: 0;
  }

  & > img {
    @media only screen and (max-width: 1280px) {
      width: 50px;
      height: 60px;
    }

    @media only screen and (max-width: 1024px) {
      width: 7rem;
      height: 12rem;
    }

    @media only screen and (max-width: 768px) {
      width: 7rem;
      height: 12rem;
    }

    @media only screen and (max-width: 576px) {
      position: relative;
      left: 1rem;
      width: 4rem;
      height: 7rem;
    }
  }
`;

export const DepositContainer = styled.div`
  margin: -0.5rem 0 0 3rem;

  @media only screen and (max-width: 1440px) {
    margin-left: 2rem;
  }
`;

export const Deposit = styled.div`
  border-bottom: 4px solid #e9e9ac;
  padding-bottom: 0.3rem;
  font-size: 0.8rem;
`;

export const Withdrawal = styled.div`
  padding-top: 0.3rem;
  font-size: 0.8rem;
`;

export const MainPageTitle = styled.div`
  color: #000;
  margin-top: 0.3rem;
`;

export const ExpandProfile = styled.div`
  display: flex;
  align-items: center;
  height: 150px;
  padding: 0 3rem;

  background: linear-gradient(180deg, #000000 0%, #3a354d 100%);
  box-shadow: inset 0px -15px 10px -14px #ffe20f;
  z-index: 1;

  position: fixed;
  top: 160px;
  width: 100%;

  color: #fff;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva,
    Verdana, sans-serif;
  font-weight: 700;

  @media only screen and (max-width: 2560px) {
    display: none;
  }

  @media only screen and (max-width: 1024px) {
    display: flex;
  }

  @media only screen and (max-width: 576px) {
    padding: 0;
    top: 115px;
  }
`;

export const ProfileWrapperMobile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  margin: '0 0 0 10%';
`;

export const DepositContainerMobile = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  position: relative;

  & > .pig,
  .pigcoin {
    position: absolute;
    top: -200%;
    left: 0;

    @media only screen and (max-width: 576px) {
      width: 50px;
      height: 50px;

      top: -100%;
    }
  }

  & > .pig {
    z-index: 1;

    @media only screen and (max-width: 768px) {
      width: 90px;
      height: auto;
      left: -4%;
      top: -142%;
    }

    @media only screen and (max-width: 576px) {
      width: 70px;
    }
  }

  & > .pigcoin {
    left: -7%;
    top: -300%;

    @media only screen and (max-width: 768px) {
      left: -12%;
      top: -269%;
      width: 140px;
    }

    @media only screen and (max-width: 576px) {
      top: -200%;
      left: -5%;
      width: 75px;
    }
  }
`;
