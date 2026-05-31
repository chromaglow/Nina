import avatar from '../assets/images/avatar.jpg';
import hero from '../assets/images/hero.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://example.com',
    avatar: {
        src: avatar,
        alt: 'Nina'
    },
    title: 'Nina',
    subtitle: 'Artist & Illustrator',
    description: 'Original paintings, illustrations, and prints by Nina.',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Nina — Artist & Illustrator'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Gallery',
            href: '/projects'
        },
        {
            text: 'Journal',
            href: '/blog'
        },
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    socialLinks: [
        {
            text: 'Instagram',
            href: 'https://www.instagram.com/nintron'
        },
        {
            text: 'Facebook',
            href: 'https://www.facebook.com/nintron'
        }
    ],
    hero: {
        title: 'We learn the most in our darkness.',
        text: "I'm **Nina** — artist, illustrator, and believer that we grow most from our mistakes.\nMy art reflects the human condition: bold, mythic, and honest about the messy parts.\n\nExplore the [Gallery](/projects) or follow along on [Instagram](https://www.instagram.com/nintron).",
        image: {
            src: hero,
            alt: 'Nina'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        enabled: false,
        title: 'Subscribe to Nina\'s Newsletter',
        text: 'New work, show announcements, and behind-the-scenes updates.',
        form: {
            action: '#'
        }
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
