"use client";
import Link from 'next/link';
import Image from 'next/image';
import logo from "../../../../../public/logo/logo.svg";

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center">
        <Image src={logo} alt="Coach-Heart Logo" width={100} height={100} className="mr-2" />
        <span className="font-display text-2xl">Coach-Heart</span>
      </div>
    </Link>
  );
};

export default Logo;
