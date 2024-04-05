/** @format */

import React from 'react';

import styles from './Header.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { IconsEnum, SvgIcon } from '@components/UI/SvgIcon';

export const HeaderComponent: React.FC = () => {
  return (
    <header className={styles.root}>
      <div className={styles.inner}>
        <div className={`${styles.logo} slideUpAnimation`}>
          <Link href="/">
            <Image src={'/logo.png'} width={128.33} height={44} alt="Logo" priority={true} />
          </Link>
        </div>
        <div className={styles.body}>
          <button className={`${styles.map} icon scaleAnimation`}>
            <SvgIcon src={IconsEnum.map} />
          </button>
          <button className={`${styles.burger} icon scaleAnimation`}>
            <SvgIcon src={IconsEnum.burger} />
          </button>
        </div>
      </div>
    </header>
  );
};
