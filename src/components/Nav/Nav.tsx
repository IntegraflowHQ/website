import Image from "next/image";
import Link from "next/link";
import WaitlistModal from "../HomePage/WaitlistModal";

const links = [
  {
    name: "Benefit",
    href: "#benefit",
  },
  {
    name: "Survery types",
    href: "#survey-types",
  },
  {
    name: "Use Cases",
    href: "#use-cases",
  },
  {
    name: "Blog",
    href: "#",
  },
  {
    name: "FAQ",
    href: "#faq",
  },
];

export default function Nav() {
  return (
    <nav className="sticky top-0 z-10 flex w-full items-center justify-between border-b border-black bg-white px-10 py-4">
      <Link href="/">
        <Image src="/logo.svg" width={133} height={29} alt="Integraflow" />
      </Link>

      <div>
        <ul className="flex space-x-8">
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="text-sm font-medium text-primary">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <WaitlistModal
        buttonProps={{
          text: "Join waitlist",
          className: "py-[16px] text-sm font-normal",
        }}
      />
    </nav>
  );
}
