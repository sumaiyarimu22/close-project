import Link from "next/link";
import { buttonVariants } from "../ui/Button";

const Navbar = () => {
  return (
    <header className="h-20 border-b border-grey flex items-center bg-white/80 backdrop-blur-lg fixed top-0 left-0 right-0 z-[100]">
      <div className="wrapper grid grid-cols-3 gap-20 items-center">
        {/* LEFT NAV */}
        <nav>
          <ul className="flex gap-5">
            <li>
              <Link href="/#packages" className="link-item">
                packages
              </Link>
            </li>
            <li>
              <Link href="/" className="link-item">
                Link 2
              </Link>
            </li>
            <li>
              <Link href="/" className="link-item">
                Link 3
              </Link>
            </li>
          </ul>
        </nav>
        {/* mid NAv */}
        <nav>
          <ul className="flex justify-center">
            <li>
              <Link
                href="/"
                className="lowercase text-3xl md:text-4xl font-semibold text-pink"
              >
                mimosa.
              </Link>
            </li>
          </ul>
        </nav>
        {/* RIGHT NAV */}
        <nav>
          <ul className="flex gap-5 justify-end items-center">
            <li>
              <Link href="/" className="link-item">
                Link 4
              </Link>
            </li>
            <li>
              <Link href="/" className="link-item">
                Link 5
              </Link>
            </li>
            <li>
              <Link
                href="/user/sign-in"
                className={buttonVariants({ variant: "dark" })}
              >
                Sign in
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
