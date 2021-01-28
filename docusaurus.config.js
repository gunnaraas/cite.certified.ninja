module.exports = {
  title: 'cite.certified.ninja',
  tagline: 'Cisco IT Essentials',
  url: 'https://cite.certified.ninja',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'gunnaraas', // Usually your GitHub org/user name.
  projectName: 'cite.certified.ninja', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Cisco IT Essentials',
      logo: {
        alt: 'MNCFS Logo',
        src: 'img/mncfs-logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'ch00-introduction',
          label: 'Start Reading',
          position: 'right',
        },
        {
          href: 'https://github.com/gunnaraas/cite.certified.ninja',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://certified.ninja',
          label: 'certified.ninja',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Handbook Sections',
          items: [
            {
              label: 'Introduction',
              to: 'docs/',
            }
          ],
        },
        {
          title: 'Related Sites',
          items: [
            {
              label: 'MNCFS Homepage',
              href: 'https://mncfs.org',
            },
            {
              label: 'certified.ninja',
              href: 'https://certified.ninja',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Minnesota Computers for Schools.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/gunnaraas/cite.certified.ninja/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/gunnaraas/cite.certified.ninja',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
