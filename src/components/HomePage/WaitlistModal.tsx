'use client';
import * as Dialog from '@radix-ui/react-dialog';
import Link from 'next/link';
import { FormEvent, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Button, { ButtonProps } from '../Button';
import { Discord2, Instagram, LinkedIn, Twitter } from '../icons';

const socialLinks = [
  {
    name: 'Twitter',
    url: '#',
    icon: Twitter,
  },
  {
    name: 'Instagram',
    url: '#',
    icon: Instagram,
  },
  {
    name: 'LinkedIn',
    url: '#',
    icon: LinkedIn,
  },
  {
    name: 'Discord',
    url: '#',
    icon: Discord2,
  },
];

const waitlistId = process.env.NEXT_PUBLIC_WAITLIST_ID;

interface Props {
  buttonProps: ButtonProps;
}

export default function WaitlistModal({ buttonProps }: Props) {
  const [email, setEmail] = useState('');
  const [joined, setJoined] = useState(false);

  const opacity = !joined ? '0.5' : '0.6';

  const handlesubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch('https://api.getwaitlist.com/api/v1/waiter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'hjkjk',
        waitlist_id: waitlistId,
        referral_link: document.location.href,
      }),
    }).then((res) => {
      if (res.ok) {
        setJoined(true);
      } else {
        toast.error('Something went wrong');
      }
    });
  };
  return (
    <Dialog.Root
      onOpenChange={() => {
        joined && setJoined(false);
        setEmail('');
      }}
    >
      <Dialog.Trigger asChild>
        <Button {...buttonProps} />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay
          className='fixed inset-0'
          style={{
            backgroundImage: `linear-gradient(140deg, rgba(28, 15, 89, ${opacity}) 50%, rgba(0, 107, 41, ${opacity}))`,
            backgroundColor: `rgba(15, 15, 15, ${opacity})`,
            backdropFilter: 'blur(6px)',
          }}
        />
        <Dialog.Content className='fixed bottom-[32px] left-[50%] translate-x-[-50%]  bg-IFBlack rounded-t-3xl p-12'>
          {!joined ? (
            <>
              <div className='flex justify-end mb-8'>
                <Dialog.Close>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='text-white'
                  >
                    <path
                      d='M6 18L18 6M6 6L18 18'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </Dialog.Close>
              </div>

              <div className='flex flex-col gap-[35px] min-w-[260px] max-w-[390px]'>
                <header className='space-y-2 text-center'>
                  <Dialog.Title className='text-IFText300 text-[32px] font-semibold leading[48px]'>
                    Join over 50+ Business TODAY in our waitlist
                  </Dialog.Title>
                  <Dialog.Description className='text-base font-normal leading-normal text-IFText'>
                    Redefine customer experience with organic feedback and
                    behavioral data in real-time.
                  </Dialog.Description>
                </header>

                <form className='flex flex-col gap-3' onSubmit={handlesubmit}>
                  <input
                    type='email'
                    placeholder='Enter your email'
                    required
                    className='p-4 rounded-lg text-base font-normal bg-[#3C2E62] text-[#AC8DFE]'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Button text='Join now' />
                </form>
              </div>
            </>
          ) : (
            <div className='flex flex-col items-center gap-2 w-max'>
              <Dialog.Title className='text-IFText300 text-[32px] font-semibold leading[48px] text-center max-w-[300px]'>
                Thank you for joining our waitlist
              </Dialog.Title>
              <div className='grid grid-cols-2 gap-3 p-8'>
                {socialLinks.map(({ name, icon: Icon, url }) => (
                  <Link
                    href={url}
                    target='_blank'
                    className='flex items-center gap-4 p-6 bg-[#131313] rounded-full w-[206px]'
                    key={name}
                  >
                    <Icon />
                    <span className='text-[#CECBCB] text-base font-medium'>
                      {name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
          <Toaster />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
