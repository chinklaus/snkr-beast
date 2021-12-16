import { List } from 'phosphor-react';
import { getTypeTitles } from '../../lib/helpers';

export default {
  title: 'Content List',
  name: 'list',
  type: 'object',
  icon: List,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      title: 'List Content',
      name: 'listContent',
      type: 'array',
      of: [
        {
          name: 'listItemTitle',
          title: 'List Item Title',
          type: 'string',
        },
      ],
    },
  ],
  // preview: {
  //   select: {
  //     columns: 'columns',
  //   },
  //   prepare({ columns }) {
  //     const name = getTypeTitles(columns.map((col) => col.blocks[0]._type));

  //     const image = (columns[0].blocks[0].content || []).find(
  //       (block) => block._type === 'photo'
  //     );

  //     return {
  //       title: `${columns.length} Column${columns.length > 1 ? 's' : ''}`,
  //       subtitle: name,
  //       media: image,
  //     };
  //   },
  // },
};
