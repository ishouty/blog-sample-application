import { ReactElement } from 'react';
import Head from 'next/head';
import Header from '../Header/Header';
import { TEXT } from '../../constants/text';
const Layout = ({
  children,
  title,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
  title: string;
}): ReactElement => {
  return (
    <>
      <Head>
        <title>{title || TEXT.DEFAULT_TITLE} </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="Keywords" content="Blog, Application, SSG" />
        <meta name="Description" content="Blog Application" />
      </Head>

      <div className="app">
        <Header title={TEXT.DEFAULT_TITLE} />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
