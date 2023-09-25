import Image from 'next/image';
import Link from 'next/link';
import WaitlistModal from '../HomePage/WaitlistModal';

const links = [
  {
    name: 'Benefit',
    href: '/#benefit',
  },
  {
    name: 'Survery types',
    href: '/#survey-types',
  },
  {
    name: 'Use Cases',
    href: '/#use-cases',
  },
  {
    name: 'Blog',
    href: '/#',
  },
  {
    name: 'FAQ',
    href: '/#faq',
  },
];

export default function Nav() {
  return (
    <div className='flex justify-between items-center w-full px-10 py-4'>
      <Link href='/'>
        <Image src='/logo.svg' width={133} height={29} alt='Integraflow' />
      </Link>

      <div>
        <ul className='flex space-x-8'>
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className='text-primary text-sm font-medium'
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <WaitlistModal
        buttonProps={{
          text: 'Join waitlist',
          className: 'py-[16px] text-sm font-normal',
        }}
      />
    </div>
  );
}
