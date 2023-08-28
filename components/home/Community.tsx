import Image from 'next/image';

const Community = () => {
  return (
    <section className='wrapper section-padding h-screen'>
      <div className='flex h-full w-full items-center justify-center '>
        {/* MAIN BOX */}
        <div className='bg-gray  relative h-[400px] w-[400px] 2xl:h-[500px] 2xl:w-[500px]'>
          {/* LEFT BOX */}
          <div className='absolute -left-[25%] -top-[10%] z-[2] h-[300px] w-[250px] overflow-hidden rounded-tl-[100px]  2xl:-top-[15%] 2xl:h-[400px] 2xl:w-[300px]'></div>
          {/* MID BOX */}
          <div className='absolute left-[50%] top-[50%] z-[3] h-[330px] w-[280px] -translate-x-[50%] -translate-y-[50%] overflow-hidden  2xl:-bottom-[15%] 2xl:h-[400px] 2xl:w-[350px]'>
            <Image
              src='https://images.pexels.com/photos/6977683/pexels-photo-6977683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='black-woman-applying-facial-mask'
              width={720}
              height={1220}
              priority
              className='h-full w-full object-cover'
            />
          </div>
          {/* RIGHT BOX */}
          <div className='absolute -bottom-[10%] -right-[25%] z-[2] h-[300px] w-[250px] overflow-hidden rounded-br-[100px]  2xl:-bottom-[15%] 2xl:h-[400px] 2xl:w-[300px]'></div>
        </div>
      </div>
    </section>
  );
};

export default Community;
