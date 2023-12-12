import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Call For Papers',
      href: getPermalink("/cfp"),
    },
    {
      text: 'Events',
      href: getPermalink("/comingsoon"),
    },
    {
      text: 'Sponsors',
      href: getPermalink("/comingsoon"),
    },
    {
      text: 'Contact',
      href: getPermalink("/contact"),
    },
    {
      text: 'The TEAM',
      href: getPermalink("/comingsoon"),
    }
  ],
  actions: [],
};

export const footerData = {
  links: [
    // {
    //   title: 'Company',
    //   links: [
    //     { text: 'About', href: '#' },
    //     { text: 'Blog', href: '#' },
    //     { text: 'Careers', href: '#' },
    //     { text: 'Press', href: '#' },
    //     { text: 'Inclusion', href: '#' },
    //     { text: 'Social Impact', href: '#' },
    //     { text: 'Shop', href: '#' },
    //   ],
    // },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') }
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://twitter.com/bsideschennai' },
    { ariaLabel: 'Linkedin', icon: 'tabler:brand-linkedin', href: "https://www.linkedin.com/groups/14357686/" }
  ],
  footNote: `
  Powered by <b>Cloudflare Technologies</b> and <b>Astro</b>
  `,
};
