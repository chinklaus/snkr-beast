import React from 'react';
import HeadSEO from '@/components/head-seo';
import Script from 'next/script';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ siteData = {}, pageData, schema, children }) => {
  return (
    <>
      {/* <HeadSEO site={siteData} page={pageData} schema={schema} /> */}
      {/* {siteData.gtmID && (
        <Script
          id="gtm"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${siteData.gtmID}');`,
          }}
        />
      )} */}
      <Header data={siteData.header} />
      <main>{children}</main>
      <Footer data={siteData.footer} />
      <style jsx>{`
        main {
          padding-top: var(--s-header);
          min-height: 80vh;
        }
      `}</style>
    </>
  );
};

export default Layout;
