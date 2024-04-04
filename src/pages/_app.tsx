import React from 'react';
import { AppProps } from 'next/app';

import MainLayout from '@layouts/MainLayout';

import '@styles/index.scss';
import { Loader } from '@components/Common/Loader';

export default function App({ Component, router, ...rest }: AppProps) {
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
        <Component {...rest} />
      </MainLayout>
      <Loader loading={loading} />
    </>
  );
}
