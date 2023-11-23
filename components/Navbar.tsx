import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className=" flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/ZoroTravels-logo.png" alt="logo" width={80} height={30} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        
      </ul>
    </nav>
  );
};

export default Navbar;
