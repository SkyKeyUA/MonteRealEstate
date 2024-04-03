/** @format */

import React from 'react';

import styles from './Header.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export const HeaderComponent: React.FC = () => {
  return (
    <header className={styles.root}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src={'/logo.png'} width={128.33} height={44} alt="Logo" />
          </Link>
        </div>
        <div className={styles.body}>
          <button className={`${styles.map} icon`}>
            <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1 4.6V19L7.3 15.4L14.5 19L20.8 15.4V1L14.5 4.6L7.3 1L1 4.6Z"
                stroke="#232323"
                stroke-width="0.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.30078 1V15.4"
                stroke="#232323"
                stroke-width="0.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.5002 4.6001V19.0001"
                stroke="#232323"
                stroke-width="0.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button className={`${styles.burger} icon`}>
            <svg
              width="23"
              height="16"
              viewBox="0 0 23 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22.0013 5.66699H5.66797"
                stroke="#232323"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path d="M22 1H1" stroke="#232323" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M22 10.3335H1"
                stroke="#232323"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22.0013 15H5.66797"
                stroke="#232323"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};
