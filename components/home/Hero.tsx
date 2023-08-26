import { cn } from '@/lib/utils';
import { Playfair_Display } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const pladairDisplay = Playfair_Display({
  subsets: ['latin'],
  style: ['italic'],
});
const Hero = () => {
  //  Mimosa's Grace: Beauty Explore
  return (
    <section className='wrapper mt-28 h-[calc(100vh-5rem)] '>
      <div className='relative grid h-[80%] w-full grid-rows-6 items-center sm:h-full md:gap-5 '>
        {/* FIRST ROW */}
        <div className='hero-col-height grid w-full grid-cols-[45%_auto]  gap-7 md:grid-cols-[35%_auto] lg:gap-14 '>
          <div className='h-full w-full overflow-hidden rounded-[0px_50PX_0PX_50PX]'>
            <Image
              src='https://images.pexels.com/photos/17048909/pexels-photo-17048909/free-photo-of-photo-of-an-attractive-young-woman-with-tattoos-lying-on-a-blanket-in-nature.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt=''
              width={640}
              height={360}
              className='h-full w-full object-cover'
            />
          </div>
          <div className='flex h-full w-full items-center'>
            <h2 className='headline1 font-bold uppercase'>
              M<span className='lowercase text-violet'>i</span>
              {`MOSA's`}
            </h2>
          </div>
        </div>

        <hr className='border-grey ' />

        {/* SECOND ROW */}
        <div className='hero-col-height grid w-full grid-cols-[25%_auto_30%] gap-7 md:grid-cols-[30%_auto_35%] lg:gap-14 '>
          <div className='flex h-full w-full items-center'>
            <h2 className='headline1 font-bold uppercase '>Grace</h2>
          </div>
          <div className='h-full w-full overflow-hidden rounded-[50px_0PX_50PX_50PX]'>
            <Image
              src={`https://images.pexels.com/photos/834872/pexels-photo-834872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
              alt=''
              width={640}
              height={360}
              className='h-full w-full object-cover'
            />
          </div>
          <div className='flex h-full w-full items-center'>
            <h2 className='headline1 font-bold uppercase'>
              <span
                className={cn(
                  'font-normal lowercase',
                  pladairDisplay.className
                )}
              >
                Beauty
              </span>
            </h2>
          </div>
        </div>

        <hr className='border-grey' />

        {/* THIRD ROW */}
        <div className='hero-col-height grid w-full grid-cols-[45%_auto] gap-7 md:grid-cols-[50%_auto] lg:gap-14 '>
          <div className='flex h-full w-full items-center'>
            <h2 className='headline1 font-bold uppercase'>
              Explore
              <span className='text-green'>.</span>
            </h2>
          </div>
          <div className='h-full w-full overflow-hidden rounded-[100px_80PX_80PX_0PX]'>
            <Image
              src='https://images.pexels.com/photos/4156299/pexels-photo-4156299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt=''
              width={1280}
              height={720}
              className='h-full w-full object-cover'
            />
          </div>
        </div>

        <hr className='border-grey' />

        {/* PACKAGES BUTTON */}
        <Link
          href='/#packages'
          className='eq group absolute bottom-[22%] left-[30%] z-[1] flex h-28 w-28 items-center justify-center overflow-hidden rounded-full bg-dark text-lg uppercase text-light shadow-2xl shadow-dark/50 hover:shadow-violet/50 sm:bottom-[18%] md:bottom-[20%] md:left-[45%] md:h-32 md:w-32'
        >
          <p className='z-[3]'>Packages</p>
          {/* FILLER 1*/}
          <span className='z[2] eq absolute bottom-0 left-0 right-0 top-full h-1/2 w-full bg-violet group-hover:top-1/2 '></span>

          {/* FILLER 2*/}
          <span className='z[2] eq absolute -top-full bottom-0 left-0 right-0 h-1/2 w-full bg-violet group-hover:top-0 '></span>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
