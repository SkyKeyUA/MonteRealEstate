import React from 'react';

import styles from './Loader.module.scss';
import classNames from 'classnames';
import { LoaderProps } from './Loader.types';

export const LoaderComponent: React.FC<LoaderProps> = ({ loading }) => {
  const className = classNames(styles.loaderContainer, {
    [styles.loading]: loading,
  });
  return (
    <div className={className}>
      <div className={styles.loader} />
    </div>
  );
};

LoaderComponent.displayName = 'Loader';
