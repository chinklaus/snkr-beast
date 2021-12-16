import React from 'react';
import theme from '@/styles/theme';

const PageHeading = ({ pageTitle }) => {
  return (
    <>
      <div className="page-heading c">
        <h1 className="c-2">{pageTitle}</h1>
      </div>
      <style jsx>{`
        .page-heading {
          color: var(--cr-white);
          background: #219cd5 url('/header-bg.png') right bottom no-repeat;
          padding: var(--s-4);
          display: flex;
        }
        @media screen and (max-width: ${theme.mediaMedium}px) {
          .page-heading {
            background: #219cd5;
          }
        }
      `}</style>
    </>
  );
};

export default PageHeading;
