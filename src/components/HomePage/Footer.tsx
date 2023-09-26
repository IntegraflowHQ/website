import { cn } from '@/utils';
import Link from 'next/link';
import Button from '../Button';

const navLinks = [
  [
    {
      name: 'About',
      href: '/#',
    },
    {
      name: 'Survey Types',
      href: '/#survey-types',
    },
    {
      name: 'Blog',
      href: '/#',
    },
    {
      name: 'Check Demo',
      href: '/#',
    },
  ],
  [
    {
      name: 'Terms of Service',
      href: '/#',
    },
    {
      name: 'Privacy Policy',
      href: '/#',
    },
    {
      name: 'Contact Us',
      href: '/#',
    },
  ],
  [
    {
      name: 'Twitter',
      href: '/#',
    },
    {
      name: 'LinkedIn',
      href: '/#',
    },
    {
      name: 'Instagram',
      href: '/#',
    },
  ],
];

export default function Footer() {
  return (
    <footer className='bg-IFBlack pt-[60px] space-y-5 p-5 rounded-b-[32px]'>
      <section className='container mx-auto flex justify-between'>
        <header className='space-y-3'>
          <h2 className='text-IFTextLight text-2xl leading-normal font-semibold'>
            Integraflow
          </h2>
          <p className='text-IFText text-sm leading-6 font-normal max-w-[239px]'>
            We&apos;re here to help you make the most of Integraflow.
          </p>
          <Button variant='tertiary' text='Feel free to chat with us.' />
        </header>
        <nav className='grid gap-3 grid-cols-3 grid-rows-2'>
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
                  <Link
                    href={link.href}
                    className='text-IFText text-sm font-normal'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
          <span className='text-IFText text-sm col-span-2'>
            We’re open source -{' '}
            <Link
              href={'https://github.com/IntegraflowHQ'}
              target='_blank'
              className='text-IFGreen underline'
            >
              Star us on Github
            </Link>
          </span>
        </nav>
      </section>
      <p className='text-IFText text-sm leading-5 text-center'>
        @ 2023 integraflow. All rights reserved.
      </p>
    </footer>
  );
}
