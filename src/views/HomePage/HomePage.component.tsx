/** @format */

import React from 'react';

import styles from './HomePage.module.scss';
import Image from 'next/image';

export const HomePageComponent: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bg} style={{ backgroundImage: "url('images/main/1.png')" }}>
        <div className={styles.root}>
          <div className={styles.body}>
            <h2 className={styles.subtitle}>Building Your Dreams</h2>
            <h1 className={styles.title}>Real Estate in Dubai: Ideal for Living and Investing</h1>
          </div>
          <div className={styles.bottom}>
            <div className={`${styles.inner} ${styles.inner__left}`}>
              <button className={styles.btn}>
                <div className={styles.svg}>
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12.7686 4.63148C13.6571 4.80449 14.4736 5.23817 15.1136 5.87702C15.7537 6.51586 16.1882 7.33081 16.3616 8.21756M12.7686 1C14.6145 1.20467 16.3357 2.02968 17.6498 3.33959C18.9639 4.64949 19.7926 6.36643 20 8.20848M19.0904 15.4533V18.1769C19.0914 18.4297 19.0395 18.68 18.938 18.9117C18.8366 19.1433 18.6877 19.3513 18.501 19.5222C18.3144 19.6932 18.094 19.8233 17.854 19.9043C17.614 19.9853 17.3597 20.0154 17.1074 19.9926C14.3084 19.6891 11.6198 18.7345 9.25753 17.2055C7.05976 15.8116 5.19643 13.9518 3.79988 11.7583C2.26262 9.38981 1.30596 6.69324 1.00738 3.88702C0.984652 3.63597 1.01455 3.38294 1.09516 3.14405C1.17578 2.90515 1.30534 2.68563 1.47562 2.49946C1.64589 2.31328 1.85314 2.16453 2.08417 2.06268C2.3152 1.96083 2.56494 1.90811 2.8175 1.90787H5.54633C5.98777 1.90353 6.41572 2.05956 6.75043 2.34685C7.08514 2.63415 7.30376 3.03313 7.36554 3.46941C7.48072 4.34102 7.69432 5.19683 8.00227 6.02052C8.12465 6.34547 8.15114 6.69862 8.07859 7.03813C8.00604 7.37764 7.83751 7.68928 7.59295 7.93612L6.43774 9.08912C7.73262 11.362 9.61815 13.2439 11.8954 14.5363L13.0506 13.3833C13.2979 13.1392 13.6101 12.971 13.9503 12.8986C14.2905 12.8262 14.6443 12.8527 14.9699 12.9748C15.7951 13.2822 16.6526 13.4954 17.5259 13.6103C17.9677 13.6725 18.3713 13.8947 18.6597 14.2345C18.9482 14.5743 19.1015 15.008 19.0904 15.4533Z"
                      stroke="#141414"
                      stroke-width="0.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <span>Contact Us Now</span>
              </button>
              <div className={styles.interior}>
                <div className={styles.text}>Explore All Our Properties</div>
                <div className={styles.image}>
                  <Image src={'/images/main/2.png'} width={70} height={70} alt="interior" />
                  <div className={styles.icon}>
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M1 10L10 1"
                        stroke="black"
                        stroke-width="0.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M1 1H10V10"
                        stroke="black"
                        stroke-width="0.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.inner} ${styles.inner_right}`}>
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
                    <path
                      d="M10 13V1"
                      stroke="#232323"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
