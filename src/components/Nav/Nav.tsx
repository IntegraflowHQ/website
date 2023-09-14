import Image from 'next/image';
import Link from 'next/link';

const links = [
  {
    name: 'Benefits',
    href: '/#benefits',
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
    href: '/',
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
                className='text-primary text-sm font-medium hover:underline'
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <button className='text-white text-sm font-normal bg-IFPurple rounded-lg px-8 py-[14px]'>
        Join waitlist
      </button>
    </div>
  );
}
