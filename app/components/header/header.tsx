import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center p-2">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <span className="ml-3 text-xl">RELIT</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/" className="mr-5 hover:text-gray-900">
            Home
          </Link>
          <Link href="/products" className="mr-5 hover:text-gray-900">
            Products
          </Link>
          <Link href="" className="mr-5 hover:text-gray-900">
            Fragrances
          </Link>
          <Link href="/gift" className="mr-5 hover:text-gray-900">
            Gift
          </Link>
          <Link href="/bulk-enquery" className="mr-5 hover:text-gray-900">
            Bulk Enquery
          </Link>
          <Link href="/contact-us" className="mr-5 hover:text-gray-900">
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
