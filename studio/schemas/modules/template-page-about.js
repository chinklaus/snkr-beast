import React from 'react';
import { Browser } from 'phosphor-react';
import customImage from '../../lib/custom-image';

const templatePageAbout = [
  {
    title: 'Banner Image',
    name: 'bannerImage',
    type: 'object',
    fields: [customImage()],
  },
  {
    title: 'Page Info',
    name: 'pageInfo',
    type: 'freeform',
  },
];

export default templatePageAbout;
