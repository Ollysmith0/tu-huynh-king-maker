import { FlexColumn, IconCenter, IconTop, Item, Name, Wrapper } from './index.styled';
import Image from 'next/image';
import panelDesktop from 'public/images/footer/nav_bot_panel_bg.webp';
import iconFront from 'public/images/footer/d_front.webp';
import iconBack from 'public/images/footer/d_back.webp';
import iconGem from 'public/images/footer/d_gem.webp';
import iconShop from 'public/images/footer/icon_shop.webp';
import iconFlag from 'public/images/footer/icon_flag.webp';
import iconController from 'public/images/footer/icon_controller.webp';
import iconUpdate from 'public/images/footer/icon_update.webp';
import iconMail from 'public/images/footer/icon_mail.webp';
import iconRanking from 'public/images/footer/icon_ranking_soon.webp';
import iconNotice from 'public/images/header/notice_dot.webp';

const Footer = () => {
  return (
    <Wrapper style={{ background: `url(${panelDesktop.src})` }}>
      <IconTop>
        <Image src={iconNotice.src} alt="icon-notice" width={50} height={50} className="notice" />
        <Image src={iconFront.src} alt="icon-front" width={150} height={150} className="front" />
        <Image src={iconBack.src} alt="icon-back" width={150} height={150} className="back" />
        <Image src={iconGem.src} alt="icon-gem" width={150} height={150} className="gem" />
      </IconTop>
      <FlexColumn>
        <Item>
          <Image src={iconShop.src} alt="icon-shop" width={150} height={150} />
          <Name>KM Shop</Name>
        </Item>{' '}
        <Item>
          <Image src={iconFlag.src} alt="icon-flag" width={150} height={150} />
          <Name>Mission</Name>
        </Item>{' '}
        <Item>
          <Image src={iconController.src} alt="icon-controller" width={150} height={150} />
          <Name>Mini Game</Name>
        </Item>
      </FlexColumn>
      <IconCenter>
        <Image src={iconNotice.src} alt="icon-notice" width={50} height={50} className="notice" />
        <Image src={iconFront.src} alt="icon-front" width={150} height={150} className="front" />
        <Image src={iconBack.src} alt="icon-back" width={150} height={150} className="back" />
        <Image src={iconGem.src} alt="icon-gem" width={150} height={150} className="gem" />
      </IconCenter>
      <FlexColumn>
        <Item>
          <Image src={iconUpdate.src} alt="icon-update" width={150} height={150} />
          <Name>News</Name>
        </Item>{' '}
        <Item>
          <Image src={iconMail.src} alt="icon-mail" width={150} height={150} />
          <Name>Inbox</Name>
        </Item>{' '}
        <Item>
          <Image src={iconRanking.src} alt="icon-ranking" width={150} height={150} />
          <Name>Ranking</Name>
        </Item>
      </FlexColumn>
    </Wrapper>
  );
};

export default Footer;
