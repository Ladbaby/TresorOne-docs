import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  // User Guide sidebar
  userSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'user/getting-started/intro',
        'user/getting-started/installation',
        'user/getting-started/connection-modes',
        'user/getting-started/dashboard',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsed: false,
      items: [
        'user/reference/downstreams',
        'user/reference/aliases',
        'user/reference/rules',
        'user/reference/plugins',
        'user/reference/logs',
        'user/reference/settings',
        'user/reference/about',
      ],
    },
  ],
};

export default sidebars;
