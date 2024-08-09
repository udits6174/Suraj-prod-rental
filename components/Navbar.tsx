"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Logo from "./Logo";
const Navbar = () => {
  const router = useRouter();
  const clickHandler = () => {
    router.push("/signup");
  };
  return (
    <>
      <header className="text-gray-600 body-font sticky top-0 my-0 bg-white">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/">
            <Logo/>
          </Link>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Link href="/contact" className="mr-5 hover:text-gray-900">Contact</Link>
            <Link href="/bookings" className="mr-5 hover:text-gray-900">My Booking</Link>
          </nav>
          <button
            onClick={clickHandler}
            className="inline-flex items-center bg-yellow-400  border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          >
            Login
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
