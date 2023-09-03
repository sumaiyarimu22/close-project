import Link from 'next/link';
import { buttonVariants } from '../../ui/Button';

const Navbar = () => {
  return (
    // fixed left-0 right-0 top-0 z-[100]
    <header className='flex h-20 items-center border-b border-gray bg-white/80 backdrop-blur-lg'>
      <div className='wrapper grid grid-cols-3 items-center gap-20'>
        {/* LEFT NAV */}
        <nav>
          <ul className='flex gap-5'>
            <li>
              <Link href='/#packages' className='link-item'>
                packages
              </Link>
            </li>
            <li>
              <Link href='/' className='link-item'>
                Link 2
              </Link>
            </li>
            <li>
              <Link href='/' className='link-item'>
                Link 3
              </Link>
            </li>
          </ul>
        </nav>
        {/* mid NAv */}
        <nav>
          <ul className='flex justify-center'>
            <li>
              <Link
                href='/'
                className='text-3xl font-semibold lowercase text-pink md:text-4xl'
              >
                mimosa.
              </Link>
            </li>
          </ul>
        </nav>
        {/* RIGHT NAV */}
        <nav>
          <ul className='flex items-center justify-end gap-5'>
            <li>
              <Link href='/' className='link-item'>
                Link 4
              </Link>
            </li>
            <li>
              <Link href='/' className='link-item'>
                Link 5
              </Link>
            </li>
            <li>
              <Link
                href='/user/sign-in'
                className={buttonVariants({ variant: 'dark' })}
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
