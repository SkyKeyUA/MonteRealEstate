/** @format */

import React from 'react';
import { Provider } from 'react-redux';
import { AppProps } from 'next/app';

import MainLayout from '@layouts/MainLayout';

import '@styles/index.scss';
import { ThemeProvider } from 'next-themes';
import { Loader } from '@components/Common/Loader';

export default function App({ Component, router }: AppProps) {
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    const handleStartRouteChanging = () => setLoading(true);
    const handleCompleteRouteChanging = () => setLoading(false);

    router.events.on('routeChangeStart', handleStartRouteChanging);
    router.events.on('routeChangeComplete', handleCompleteRouteChanging);

    return () => {
      router.events.off('routeChangeStart', handleStartRouteChanging);
      router.events.off('routeChangeComplete', handleCompleteRouteChanging);
    };
  }, []);
  return (
    <>
      <MainLayout>
        <Component />
      </MainLayout>
      <Loader loading={loading} />
    </>
  );
}
