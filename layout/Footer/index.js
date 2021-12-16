import theme from '@/styles/theme';
import Link from 'next/link';
import { nanoid } from 'nanoid';

const Footer = ({ data }) => {
  return (
    <>
      <footer className="bg-gray">
        <div className="main-footer">
          <div className="footer-links">
            {data &&
              data.mainMenu.menu.items.map((item) => {
                const navLink = item.page
                  ? item.page.slug === 'home'
                    ? '/'
                    : item.page.slug
                  : item.url;

                return (
                  <Link href={navLink} key={nanoid()}>
                    <a className="links-item t-b-2 cr-white">{item.title}</a>
                  </Link>
                );
              })}
          </div>
          {data ? (
            <div className="footer-copyright">{data.siteCopyright}</div>
          ) : (
            <div className="footer-copyright">
              Copyright © 2021 View Source. All rights reserved.
            </div>
          )}
        </div>
      </footer>

      <style jsx>{`
        footer {
          padding: var(--s-4);
          .footer-links {
            .links-item {
              &:not(:last-child) {
                margin: 0 var(--s-4) 0 0;
              }
            }
          }
          .footer-copyright {
            color: #bfbdbe;
            font: var(--t-l-1);
            margin-top: var(--s-4);
            line-height: var(--s-2);
          }
        }

        @media screen and (max-width: ${theme.mediaSmall}px) {
          footer {
            & *:not(:last-child) {
              margin: 0;
            }
            .footer-links {
              display: flex;
              flex-direction: column;
              .links-item {
                padding: var(--s-1);
              }
            }
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
