import Image from 'next/image';
import Link from 'next/link';

const Community = () => {
  return (
    <section className='wrapper section-padding my-20 h-screen'>
      <div className='relative flex h-full w-full items-center justify-center'>
        {/* MAIN BOX */}
        <div className='relative h-[400px] w-[400px] bg-gray 2xl:h-[500px] 2xl:w-[500px]'>
          {/* LEFT BOX */}
          <div className='absolute -left-[25%] -top-[15%] z-[2] h-[350px]  w-[250px] overflow-hidden rounded-tl-[100px] 2xl:h-[400px] 2xl:w-[300px]'>
            <Image
              src='https://images.pexels.com/photos/2095544/pexels-photo-2095544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='Young Woman with Pink Eye Makeup'
              width={720}
              height={1280}
              priority
              className='h-full w-full object-cover brightness-50'
            />
          </div>

          {/* MID BOX */}
          <div className='absolute left-[50%] top-[50%] z-[3] h-[300px] w-[250px] -translate-x-1/2 -translate-y-1/2 overflow-hidden shadow-2xl shadow-dark/50 2xl:h-[400px] 2xl:w-[300px]'>
            <Image
              src='https://images.pexels.com/photos/1066111/pexels-photo-1066111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='Woman Wearing Black Top'
              width={720}
              height={1280}
              priority
              className='h-full w-full object-cover'
            />
          </div>

          {/* RIGHT BOX */}
          <div className='absolute -bottom-[15%] -right-[25%] z-[2] h-[350px] w-[250px] overflow-hidden rounded-br-[100px] 2xl:h-[400px] 2xl:w-[300px]'>
            <Image
              src='https://images.pexels.com/photos/2843035/pexels-photo-2843035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='Photo of Woman in Black Long-sleeved Dress Posing With Her Eyes Closed In Front of Black Background'
              width={720}
              height={1280}
              priority
              className='h-full w-full object-cover'
            />
          </div>

          {/* UPPER RIGHT TEXT */}
          <h2 className='headline-2 absolute -top-[10%] left-[45%]  z-[2] whitespace-nowrap font-bold uppercase 2xl:left-[40%]'>
            Join Mimosa
          </h2>

          {/* BOTTOM LEFT TEXT */}
          <h2 className='headline-2 absolute -bottom-[10%] right-[45%] z-[2] font-bold uppercase 2xl:right-[40%]'>
            Community
          </h2>
        </div>

        {/* JOIN BUTTON */}
        <Link
          href='/#packages'
          className='eq group absolute bottom-[5%] right-0 z-[1] flex h-28 w-28 items-center justify-center overflow-hidden rounded-full bg-dark/80 text-lg uppercase text-light shadow-2xl shadow-dark/50 backdrop-blur-lg hover:shadow-red/50 md:h-32 md:w-32 2xl:bottom-[15%] 2xl:right-[10%] 2xl:h-40 2xl:w-40'
        >
          <p className='z-[3]'>Join Now</p>

          {/* FILLER 1*/}
          <span className='eq absolute bottom-0 left-0 right-0 top-full z-[2] h-1/2 w-full bg-red group-hover:top-1/2'></span>

          {/* FILLER 2*/}
          <span className='eq absolute -top-full bottom-0 left-0 right-0 z-[2] h-1/2 w-full bg-red group-hover:top-0'></span>
        </Link>
      </div>
    </section>
  );
};

export default Community;
