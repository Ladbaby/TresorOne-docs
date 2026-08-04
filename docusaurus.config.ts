import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'TresorOne',
  tagline: 'A cross-platform desktop client for managing your Tresor LLM gateway.',
  favicon: 'img/favicon.ico',

  // GitHub Pages via `docusaurus deploy`
  url: 'https://ladbaby.github.io',
  baseUrl: '/TresorOne-docs/',
  trailingSlash: false,
  organizationName: 'ladbaby',
  projectName: 'TresorOne-docs',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: './docs-content',
          routeBasePath: 'docs',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/ladbaby/TresorOne-docs/edit/main/docs-content/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'TresorOne',
      logo: {
        alt: 'TresorOne Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'userSidebar',
          position: 'left',
          label: 'User Guide',
        },
        {
          href: 'https://github.com/ladbaby/TresorOne-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'User Guide',
          items: [
            {label: 'Introduction', to: 'docs/user/getting-started/intro'},
            {label: 'Installation', to: 'docs/user/getting-started/installation'},
            {label: 'Connection Modes', to: 'docs/user/getting-started/connection-modes'},
            {label: 'Dashboard', to: 'docs/user/getting-started/dashboard'},
            {label: 'Downstreams', to: 'docs/user/reference/downstreams'},
            {label: 'Aliases', to: 'docs/user/reference/aliases'},
            {label: 'Rules', to: 'docs/user/reference/rules'},
            {label: 'Plugins', to: 'docs/user/reference/plugins'},
            {label: 'Logs', to: 'docs/user/reference/logs'},
            {label: 'Settings', to: 'docs/user/configuration/settings'},
            {label: 'About', to: 'docs/user/configuration/about'},
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Tresor Source',
              href: 'https://github.com/ladbaby/Tresor',
            },
            {
              label: 'TresorOne Source',
              href: 'https://github.com/ladbaby/TresorOne',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} TresorOne. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['yaml', 'bash', 'json'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
