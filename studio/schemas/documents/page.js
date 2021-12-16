import React from 'react';
import { Browser } from 'phosphor-react';
import templatePageHome from '../modules/template-page-home';
import templatePageAbout from '../modules/template-page-about';

export default {
  title: 'Page',
  name: 'page',
  type: 'document',
  icon: () => <Browser />,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      title: 'URL Slug',
      name: 'slug',
      type: 'slug',
      description: '(required)',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      title: 'Overlay header with transparency?',
      name: 'hasTransparentHeader',
      type: 'boolean',
      description:
        'When activated the header will overlay the first content module with a transparent background and white text until scrolling is engaged.',
      initialValue: false,
    },
    {
      title: 'Heading',
      name: 'heading',
      type: 'string',
    },
    {
      title: 'Page Home',
      name: 'pageHome',
      type: 'object',
      fields: [...templatePageHome],
      hidden: ({ document }) => {
        if (document?.slug && document?.slug.current === 'home') {
          return false;
        }
        return true;
      },
    },
    {
      title: 'Page About',
      name: 'pageAbout',
      type: 'object',
      fields: [...templatePageAbout],
      hidden: ({ document }) => {
        if (document?.slug && document?.slug.current === 'about-us') {
          return false;
        }
        return true;
      },
    },
    {
      title: 'Page Modules',
      name: 'modules',
      type: 'array',
      of: [
        { type: 'grid' },
        { type: 'list' },
        { type: 'hero' },
        { type: 'freeform' },
        { type: 'marquee' },
        { type: 'dividerPhoto' },
      ],
      hidden: ({ document }) => {
        return (
          document?.slug.current === 'home' ||
          document?.slug.current === 'about-us'
        );
      },
    },
    {
      title: 'SEO / Share Settings',
      name: 'seo',
      type: 'seo',
    },
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug',
    },
    prepare({ title = 'Untitled', slug = {} }) {
      const path = `/${slug.current}`;
      return {
        title,
        subtitle: slug.current ? path : '(missing slug)',
      };
    },
  },
};
