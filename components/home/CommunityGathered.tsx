import Image from 'next/image';

const CommunityGathered = () => {
  return (
    <section className='section-padding-2 min-h-screen bg-dark'>
      <div className='wrapper relative flex h-full w-full items-center justify-center'>
        {/* BLOCKS */}
        <div className='relative grid h-[700px] w-[1000px] grid-cols-10'>
          {Array.from({ length: 70 }).map((_, index) => (
            /* OUTER BLOCK */
            <div key={index} className='group z-[4] h-full w-full'>
              {/* INNER BLOCK */}
              <div className='eq invisible h-full w-full bg-orange opacity-50 group-hover:visible group-hover:opacity-100'></div>
            </div>
          ))}

          {/* OVERLAY */}
          <div className='absolute bottom-0 left-0 right-0 top-0 z-[2] h-full w-full bg-orange/20'></div>

          {/* IMAGE */}
          <div className='absolute bottom-0 left-0 right-0 top-0 z-[1] h-full w-full overflow-hidden'>
            <Image
              src='https://images.pexels.com/photos/5581787/pexels-photo-5581787.jpeg'
              alt='Graceful Woman with her Arms Raised Underwater'
              width={1000}
              height={1000}
              priority
              className='h-full w-full object-cover'
            />
          </div>
        </div>

        {/* UPPER LEFT TEXT */}
        <div className='absolute left-0 top-[10%] z-[3] w-[50%] text-5xl font-semibold uppercase text-light'>
          {`Join now to grab the`}{' '}
          <span className='text-orange'>{`"Mimosa Beauty Pass"`}</span>{' '}
          {`for all services at once!`}
        </div>

        {/* BOTTOM RIGHT TEXT */}
        <div className='absolute bottom-[10%] right-0 z-[3] w-[50%] text-right text-5xl font-semibold uppercase text-light'>
          {`3-month subscription,`} <span className='text-orange'>$300</span>.{' '}
          {`Limited time – join us today!`}
        </div>
      </div>
    </section>
  );
};

export default CommunityGathered;
