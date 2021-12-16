import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import Link from 'next/link';
import SvgIcons from '@/components/svg-icons';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => {
    setIsOpen(true);
  };
  return (
    <>
      <div
        className={cx('mobile-main-header', {
          'is-open': isOpen,
        })}
      >
        <Link href="/">
          <a>View Source</a>
        </Link>
        <button className="menu-bar" onClick={onClick}>
          <SvgIcons type={'menu'} />
        </button>
      </div>
      <style jsx>{`
        .mobile-main-headr {
          display: flex;
          color: blue;
          &.is-open {
            transform: none;
          }

          .menu-bar {
            position: absolute;
            top: 5px;
            right: var(--s-2);
          }
        }
      `}</style>
    </>
  );
};

export default MobileMenu;
