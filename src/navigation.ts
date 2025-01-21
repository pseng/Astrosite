// import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: './',
    },
  
    {
      text: 'articles',
      href: 'blog',
    },
  
    {
      text: 'Projects',
      href: 'projects_overview',
    },
  ],
  actions: [{ text: 'Download',href: 'PhilSambati_CV-2025-SPN.pdf', download: 'PhilSambatiCV', target: '_blank', rel: 'noopener noreferrer' }],
};

export const footerData = {
  links: [
    // {
    //   title: 'Product',
    //   links: [
    //     { text: 'Features', href: '#' },
    //     { text: 'Security', href: '#' },
    //     { text: 'Team', href: '#' },
    //     { text: 'Enterprise', href: '#' },
    //     { text: 'Customer stories', href: '#' },
    //     { text: 'Pricing', href: '#' },
    //     { text: 'Resources', href: '#' },
    //   ],
    // },
    {
      title: 'Website',
      links: [
        { text: 'About', href: 'about' },
        { text: 'Articles', href: '#' },
        { text: 'CV', href: 'index' },
        { text: 'Projects', href: 'projects_overview' },
      ],
    },
  ],
  // secondaryLinks: [
  //   { text: 'Terms', href: getPermalink('/terms') },
  //   { text: 'Privacy Policy', href: getPermalink('/privacy') },
  // ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://philsambati.com/"> Phil Sambati</a> · All rights reserved.
  `,
};
