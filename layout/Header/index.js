import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import theme from '@/styles/theme';
import Link from 'next/link';
import cx from 'classnames';
import { useMediaQuery } from 'react-responsive';
import SvgLogo from '@/components/svg-logo';
import SvgIcons from '@/components/svg-icons';
import { nanoid } from 'nanoid';

import MobileMenu from './MobileMenu';

function Header({ data }) {
  const isMobileHeader = useMediaQuery({
    query: `(max-width: ${theme.mediaMedium}px)`,
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  const openMobileMenuick = () => {
    setIsMobileMenuOpen(true);
  };

  const [headerHeight, setHeaderHeight] = useState(0);
  const headeRef = useRef(null);

  const setSpacingVariables = () => {
    document.documentElement.style.setProperty(
      '--s-header',
      `${globalHeader ? globalHeader.offsetHeight : 0}px`
    );

    document.documentElement.style.setProperty(
      '--s-viewport-height',
      `${window.innerHeight}px`
    );
  };

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--s-header',
      `${headeRef.current.clientHeight}px`
    );
  }, [headeRef]);

  const mobileMenuDOM = (() => {
    return (
      <>
        <div className="button-section">
          {isMobileMenuOpen === false ? (
            <button className="menu-bar" onClick={openMobileMenuick}>
              <SvgIcons type={'menu'} />
            </button>
          ) : (
            <div className="mobile-menu-list">
              <button className="menu-bar" onClick={closeMobileMenu}>
                <SvgIcons type={'close'} />
              </button>
            </div>
          )}
        </div>
        <style jsx>{`
          .menu-bar {
            position: absolute;
            top: var(--s-2);
            right: var(--s-2);
          }
          .list-item {
            position: relative;
          }
        `}</style>
      </>
    );
  })();

  return (
    <>
      <header ref={headeRef} className="page-header">
        <div
          className={cx('header-wrapper f-h f-a-c c', {
            'is-open': isMobileMenuOpen,
          })}
        >
          <Link href="/">
            <a className="header-logo">
              <SvgLogo />
            </a>
          </Link>
          {isMobileHeader === false ? (
            <div className="f-h f-a-c">
              <nav>
                {data &&
                  data.menuDesktop.items.map((item) => {
                    const navLink =
                      item.page.slug === 'home' ? '/' : item.page.slug;
                    return (
                      <Link href={navLink} key={nanoid()}>
                        <a>{item.title}</a>
                      </Link>
                    );
                  })}
              </nav>
            </div>
          ) : (
            mobileMenuDOM
          )}
        </div>
      </header>

      <style jsx>{`
        header {
          position: fixed;
          top: 0px;
          left: 0px;
          width: 100%;
          z-index: 99;
          background-color: var(--cr-subdued);
          transition: background-color 300ms ease-in 0s;
          box-shadow: 1px 1px 10px -2px var(--cr-gray);
          padding: var(--s-1) 0;
        }
        .header-wrapper {
          &.is-open {
            background-color: var(--cr-white);
            overflow-y: auto;
            height: 100%;
            transition: background 0.36s cubic-bezier(0.32, 0.08, 0.24, 1) 0s,
              height 0.66s cubic-bezier(0.52, 0.16, 0.24, 1) 0s;
          }
          .header-logo {
            display: inline-block;
            width: 90px;
            height: 90px;
            :global(svg) {
              width: 100%;
              height: 100%;
            }
          }
          nav {
            a {
              color: var(--cr-black);
              margin-right: var(--s-4);
              :after {
                content: '';
                display: block;
                height: 3px;
                left: 50%;
                margin-top: 25px;
                position: absolute;
                background: var(--cr-blue);
                transition: width 0.5s ease 0s, left 0.5s ease 0s;
                width: 0;
              }
              @media (hover: hover) {
                :hover {
                  color: var(--cr-blue);
                  :after {
                    width: 100%;
                    left: 0;
                  }
                }
              }
            }
          }
        }
        @media screen and (max-width: ${theme.mediaMedium}px) {
        }
      `}</style>
    </>
  );
}

export default Header;
