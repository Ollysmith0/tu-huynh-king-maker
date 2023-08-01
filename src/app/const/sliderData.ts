import first from 'public/images/bannerGame/5_card_poker.webp';
import second from 'public/images/bannerGame/7up_7down.webp';
import third from 'public/images/bannerGame/32_card.webp';
import fourth from 'public/images/bannerGame/andar_bahar.webp';
import fith from 'public/images/bannerGame/baccarat.webp';
import sixth from 'public/images/bannerGame/baibuu.webp';
import seventh from 'public/images/bannerGame/baicao.webp';
import eighth from 'public/images/bannerGame/belangkai.webp';

export interface sliderDataProps {
  id: number;
  name: any;
  isActive: boolean;
}

export const sliderData: sliderDataProps[] = [
  { id: 1, name: first, isActive: false },
  { id: 2, name: second, isActive: false },
  { id: 3, name: third, isActive: false },
  { id: 4, name: fourth, isActive: false },
  { id: 5, name: fith, isActive: false },
  { id: 6, name: sixth, isActive: false },
  { id: 7, name: seventh, isActive: false },
  { id: 8, name: eighth, isActive: false },
  { id: 9, name: eighth, isActive: false },
  { id: 10, name: eighth, isActive: false },
  { id: 11, name: eighth, isActive: false },
];
