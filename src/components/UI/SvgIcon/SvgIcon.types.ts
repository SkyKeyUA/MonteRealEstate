/** @format */

import { CSSProperties } from 'react';

export enum IconsEnum {
  map = '/images/icons/map.svg',
  burger = '/images/icons/burger.svg',
  favourite = '/images/icons/favourite.svg',
  house = '/images/icons/house.svg',
  phone = '/images/icons/phone.svg',
  arrow = '/images/icons/arrow.svg',
  download = '/images/icons/download.svg',
}

export type SvgIconProps = {
  src: IconsEnum;
  onClick?: () => void;
  size?: number;
  rotate?: '0' | '90' | '180' | '270';
  className?: string;
  style?: CSSProperties;
};
