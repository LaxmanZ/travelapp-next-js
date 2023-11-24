import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="flexCenter mb-24">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
            <Image
              src="/ZoroTravels-logo.png"
              alt="logo"
              width={80}
              height={30}
            />
          </Link>

          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((colos) => (
              <FooterColos title={colos.title}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {colos.links.map((link, id) => (
                    <Link href="/" key={id}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColos>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColos title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link, index) => (
                  <Link
                    href="/"
                    key={index}
                    className="flex gap-4 md:flex-col lg:flex-row"
                  >
                    <p className="whitespace-nowrap">{link.label}: </p>
                    <p className="medium-14 whitespace-nowrap">{link.value}</p>
                  </Link>
                ))}
              </FooterColos>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColos title={SOCIALS.title}>
                <ul className="regular flex gap-4 text-gray-30">
                  {SOCIALS.links.map((link, i) => (
                    <Link href="/" key={i}>
                      <Image src={link} alt="logo" width={24} height={24} />
                    </Link>
                  ))}
                </ul>
              </FooterColos>
            </div>
          </div>
        </div>

        <div className="border bg-gray-20" />

        <p className="regular-14 w-full text-center text-gray-30">
          2023 ZoroTravels | All rights reserved
        </p>
      </div>
    </footer>
  );
};

type FooterColumProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColos = ({ title, children }: FooterColumProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
