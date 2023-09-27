import { cn } from '@/utils';
import Link from 'next/link';
import Button from '../Button';

const navLinks = [
  [
    {
      name: 'About',
      href: '#',
    },
    {
      name: 'Survey Types',
      href: '#survey-types',
    },
    {
      name: 'Blog',
      href: '#',
    },
    {
      name: 'Check Demo',
      href: '#',
    },
  ],
  [
    {
      name: 'Terms of Service',
      href: '#',
    },
    {
      name: 'Privacy Policy',
      href: '#',
    },
    {
      name: 'Contact Us',
      href: '#',
    },
  ],
  [
    {
      name: 'Twitter',
      href: '#',
    },
    {
      name: 'LinkedIn',
      href: '#',
    },
    {
      name: 'Instagram',
      href: '#',
    },
  ],
];

export default function Footer() {
  return (
    <footer className='bg-IFBlack pt-[60px] space-y-5 p-5 rounded-b-[32px]'>
      <section className='container flex justify-between mx-auto'>
        <header className='space-y-3'>
          <h2 className='text-2xl font-semibold leading-normal text-IFTextLight'>
            Integraflow
          </h2>
          <p className='text-IFText text-sm leading-6 font-normal max-w-[239px]'>
            We&apos;re here to help you make the most of Integraflow.
          </p>
          <Button variant='tertiary' text='Feel free to chat with us.' />
        </header>
        <nav className='grid grid-cols-3 grid-rows-2 gap-3'>
          {navLinks.map((links, index) => (
            <ul
              key={index}
              className={cn(
                'flex flex-col gap-2',
                index === 0 ? 'row-span-2' : ''
              )}
            >
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className='text-sm font-normal text-IFText'
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          ))}
          <span className='col-span-2 text-sm text-IFText'>
            We’re open source -{' '}
            <Link
              href={'https://github.com/IntegraflowHQ'}
              target='_blank'
              className='underline text-IFGreen'
            >
              Star us on Github
            </Link>
          </span>
        </nav>
      </section>
      <p className='text-sm leading-5 text-center text-IFText'>
        @ 2023 integraflow. All rights reserved.
      </p>
    </footer>
  );
}
