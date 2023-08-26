import { data } from '@/data/packages';
import SectionTitle from '../shared/SectionTitle';
import HorizontalTab from '../ui/HorizontalTab';
import PackageItem from './PackageItem';

const Packages = () => {
  return (
    <section className='wrapper section-padding' id='packages'>
      <SectionTitle
        title="Unlock Beauty's Best Packages."
        subtitle='Packages'
      />
      <HorizontalTab tabs={['Beauty', 'Wellness', 'Events']}>
        {/* Wellness */}
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {data
            .filter((item: any) => item.masterCategory === 'Wellness')
            .sort((a: any, b: any) => a.price - b.price)
            .map((item: any) => (
              <PackageItem key={item.id} {...item} />
            ))}
        </div>

        {/* Beauty */}
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {data
            .filter((item: any) => item.masterCategory === 'Beauty')
            .sort((a: any, b: any) => a.price - b.price)
            .map((item: any) => (
              <PackageItem key={item.id} {...item} />
            ))}
        </div>

        {/* Events */}
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {data
            .filter((item: any) => item.masterCategory === 'Events')
            .sort((a: any, b: any) => a.price - b.price)
            .map((item: any) => (
              <PackageItem key={item.id} {...item} />
            ))}
        </div>
      </HorizontalTab>
    </section>
  );
};

export default Packages;
