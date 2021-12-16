import React from 'react';
import useInView from 'react-cool-inview';
import Marquee from 'react-fast-marquee';

import Photo from '@/components/photo';

const MarqueeComp = ({ data = {} }) => {
  const { items, speed, reverse, pausable } = data;

  const { observe, inView } = useInView({
    unobserveOnEnter: true,
    threshold: 0.1,
  });

  if (!items?.length) return null;

  return (
    <div ref={observe} className="marquee-section">
      <Marquee>
        <div className="marquee--item">
          {items.map((item, key) => {
            switch (item._type) {
              case 'simple':
                return (
                  <span key={key} className="marquee--text">
                    {item.text}
                  </span>
                );
              case 'photo':
                return (
                  <div
                    key={key}
                    className="marquee--photo"
                    style={{ flex: item.photo.aspectRatio }}
                  >
                    <Photo
                      photo={item.photo}
                      hasPlaceholder={false}
                      forceLoad={inView}
                    />
                  </div>
                );
            }
          })}
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeComp;
