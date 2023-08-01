import React, { FC } from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { storeWrapper } from '@/store/store';

/**
 * withRedux HOC
 * NextJS wrapper for Redux
 */

const CustomApp: FC<AppProps> = ({ Component, ...rest }) => {
  const { store, props } = storeWrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Component {...props.pageProps} />
    </Provider>
  );
};

export default CustomApp;
