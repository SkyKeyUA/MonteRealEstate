/** @format */

import React from 'react';
import { Provider } from 'react-redux';
import { AppProps } from 'next/app';

import MainLayout from '@layouts/MainLayout';

import '@styles/index.scss';
import { ThemeProvider } from 'next-themes';

export default function App({ Component }: AppProps) {
  return (
    <MainLayout>
      <Component />
    </MainLayout>
  );
}
