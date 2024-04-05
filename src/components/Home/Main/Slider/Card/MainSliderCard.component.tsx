import React from 'react';

import styles from './MainSliderCard.module.scss';
import Image from 'next/image';
import { ItemProps } from '../MainSlider.types';
import { IconsEnum, SvgIcon } from '@components/UI/SvgIcon';

export const MainSliderCardComponent: React.FC<ItemProps> = ({ image }) => {
  return (
    <div className={styles.inner}>
      <Image
        className={`${styles.image} zoomAnimation`}
        src={`/images/main/slider/${image}`}
        width={710}
        height={880}
        alt="picture"
        priority={true}
      />
      <div className={styles.top}>
        <div className={styles.info}>
          <span className="slideUpAnimation">More than 1500 real estate properties</span>
          <span className="slideUpAnimation">From $145,000 with a yield of 10% per annum</span>
        </div>
        <div className={styles.icons}>
          <button className={`${styles.favourite} icon scaleAnimation`}>
            <SvgIcon src={IconsEnum.favourite} />
          </button>
          <button className={`${styles.house} icon scaleAnimation`}>
            <SvgIcon src={IconsEnum.house} />
          </button>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.hidden}>More than 1500 real estate properties</div>
        <button className={`${styles.items} scaleAnimation`}>
          <div className={styles.item}>catalog download</div>
          <div className={styles.download}>
            <SvgIcon src={IconsEnum.download} />
          </div>
        </button>
      </div>
    </div>
  );
};
