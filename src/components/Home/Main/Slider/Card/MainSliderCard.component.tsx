import React from 'react';

import styles from './MainSliderCard.module.scss';
import Image from 'next/image';
import { ItemProps } from '../MainSlider.types';

export const MainSliderCardComponent: React.FC<ItemProps> = ({ image }) => {
  return (
    <div className={styles.inner}>
      <Image
        className={styles.image}
        src={`/images/main/slider/${image}`}
        width={710}
        height={880}
        alt="picture"
      />
      <div className={styles.top}>
        <div className={styles.info}>
          <span>More than 1500 real estate properties</span>
          <span>From $145,000 with a yield of 10% per annum</span>
        </div>
        <div className={styles.icons}>
          <button className={`${styles.favourite} icon`}>
            <svg
              width="24"
              height="21"
              viewBox="0 0 24 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21.3036 2.69641C20.766 2.1586 20.1278 1.73197 19.4253 1.44089C18.7228 1.14982 17.9699 1 17.2095 1C16.4491 1 15.6961 1.14982 14.9936 1.44089C14.2912 1.73197 13.6529 2.1586 13.1153 2.69641L11.9997 3.81203L10.8841 2.69641C9.79827 1.61058 8.32556 1.00056 6.78997 1.00056C5.25437 1.00056 3.78167 1.61058 2.69584 2.69641C1.61001 3.78224 1 5.25494 1 6.79053C1 8.32613 1.61001 9.79883 2.69584 10.8847L3.81147 12.0003L11.9997 20.1885L20.188 12.0003L21.3036 10.8847C21.8414 10.3471 22.268 9.70885 22.5591 9.00636C22.8502 8.30388 23 7.55093 23 6.79053C23 6.03013 22.8502 5.27718 22.5591 4.5747C22.268 3.87222 21.8414 3.23396 21.3036 2.69641Z"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button className={`${styles.house} icon`}>
            <svg
              width="22"
              height="21"
              viewBox="0 0 22 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1 20.4697H21"
                stroke="#232323"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1.94922 20.47L1.99922 8.44C1.99922 7.83 2.28922 7.25 2.76922 6.87L9.76922 1.42C10.4892 0.86 11.4992 0.86 12.2292 1.42L19.2292 6.86C19.7192 7.24 19.9992 7.82 19.9992 8.44V20.47"
                stroke="#232323"
                stroke-miterlimit="10"
                stroke-linejoin="round"
              />
              <path
                d="M9 14.7197V16.2197M9.5 5.96973H12.5M14.5 9.46973H7.5C6.67 9.46973 6 10.1397 6 10.9697V20.4697H16V10.9697C16 10.1397 15.33 9.46973 14.5 9.46973Z"
                stroke="#232323"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.hidden}>More than 1500 real estate properties</div>
        <button className={styles.items}>
          <div className={styles.item}>catalog download</div>
          <div className={styles.download}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19 13V17C19 17.5304 18.7893 18.0391 18.4142 18.4142C18.0391 18.7893 17.5304 19 17 19H3C2.46957 19 1.96086 18.7893 1.58579 18.4142C1.21071 18.0391 1 17.5304 1 17V13"
                stroke="#232323"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5 8L10 13L15 8"
                stroke="#232323"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path d="M10 13V1" stroke="#232323" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};
