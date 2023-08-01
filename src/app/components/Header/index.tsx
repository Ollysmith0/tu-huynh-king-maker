'use client';
import { useWindowSize } from '@/app/hooks/useWindowResized';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import {
  Avatar,
  AvatarMobile,
  Bets,
  Content,
  Currency,
  CurrencyWrapper,
  Deposit,
  DepositContainer,
  DepositContainerMobile,
  DepositWrapper,
  ExpandProfile,
  LeftContent,
  Level,
  MainPageTitle,
  MainPageWrapper,
  MenuWrapper,
  Name,
  Profile,
  ProfileFrameWrapper,
  ProfileWrapper,
  ProfileWrapperMobile,
  RightContent,
  Withdrawal,
  Wrapper,
} from './index.styled';
import background from 'public/images/header/top_panel_bg.webp';
import avatar from 'public/images/header/profile_imgtemp7.webp';
import profile_frame from 'public/images/header/frame_proflie.webp';
import coin from 'public/images/header/icon_coin.webp';
import diamond from 'public/images/header/icon_diamond.webp';
import deposit from 'public/images/header/icon_deposit.webp';
import home from 'public/images/header/ico_home.webp';
import menu from 'public/images/header/icon_menu.webp';
import profile_mobile from 'public/images/header/img_panel_brown.webp';
import deposit_mobile from 'public/images/header/img_panel_green.webp';
import pig from 'public/images/header/pig.webp';
import pigcoin from 'public/images/header/pigcoin_prop.webp';

const Header = () => {
  return (
    <>
      <Wrapper style={{ backgroundImage: `url(${background.src})` }}>
        <LeftContent>
          <Avatar style={{ backgroundImage: `url(${avatar.src})` }}>
            <ProfileFrameWrapper>
              <Image src={profile_frame.src} alt="profile-frame-img" fill />
            </ProfileFrameWrapper>
          </Avatar>
          <ProfileWrapper>
            <Profile>
              <Level>Lv. 1</Level>
              <Name>Kingmaker#1</Name>
            </Profile>
            <Bets>0 / 20 Bets</Bets>
          </ProfileWrapper>
          <CurrencyWrapper>
            <Currency>
              <Image src={coin.src} alt="coin-img" width={20} height={20} />
              <span>91.50</span>
            </Currency>
            <Currency style={{ marginBottom: 0 }}>
              <Image src={diamond.src} alt="diamond-img" width={20} height={20} />
              <span>2,082</span>
            </Currency>
          </CurrencyWrapper>
        </LeftContent>
        <Content>
          360,146,334
          <div style={{ fontSize: '1rem' }}>THB</div>
        </Content>
        <RightContent>
          <DepositWrapper style={{ backgroundImage: `url(${deposit.src})` }}>
            <DepositContainer>
              <Deposit>Deposit</Deposit>
              <Withdrawal>Withdrawal</Withdrawal>
            </DepositContainer>
          </DepositWrapper>
          <MainPageWrapper>
            <Image src={home.src} alt="home-icon" width={45} height={45} />
            <MainPageTitle>Mainpage</MainPageTitle>
          </MainPageWrapper>
          <MenuWrapper>
            <Image src={menu.src} alt="menu-icon" width={70} height={80} />
          </MenuWrapper>
        </RightContent>
      </Wrapper>
      <ExpandProfile>
        <LeftContent style={{ background: `url(${profile_mobile.src})`, width: '50%' }}>
          <AvatarMobile style={{ backgroundImage: `url(${avatar.src})` }}>
            <ProfileFrameWrapper>
              <Image src={profile_frame.src} alt="profile-frame-img" fill />
            </ProfileFrameWrapper>
          </AvatarMobile>
          <ProfileWrapperMobile>
            <Profile style={{}}>
              <Level style={{ backgroundColor: 'initial' }}>Lv. 1</Level>
              <Name>Kingmaker#1</Name>
            </Profile>
            <Bets style={{ backgroundColor: 'initial' }}>0 / 20 Bets</Bets>
          </ProfileWrapperMobile>
        </LeftContent>
        <RightContent style={{ background: `url(${deposit_mobile.src})`, width: '50%' }}>
          <DepositContainerMobile>
            <Image src={pig.src} alt="pig-img" width={100} height={100} className="pig" />
            <Image
              src={pigcoin.src}
              alt="pigcoin-img"
              width={170}
              height={100}
              className="pigcoin"
            />
            <div>Deposit /</div>
            <div style={{ marginLeft: '.5rem' }}>Withdrawal</div>
          </DepositContainerMobile>
        </RightContent>
      </ExpandProfile>
    </>
  );
};

export default Header;
