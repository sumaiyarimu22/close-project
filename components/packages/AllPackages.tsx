import { data } from '@/data/packages';
import SectionTitle from '../shared/SectionTitle';
import HorizontalTab from '../ui/HorizontalTab';
import PackageItem from '../home/PackageItem';
import { packageItem } from '@/types/packageItem';

const AllPackages = () => {
  return (
    <section className='wrapper section-padding min-h-screen'>
      <SectionTitle
        title="Unlock Beauty's Best Packages."
        subtitle='Packages'
      />

      <HorizontalTab tabs={['Wellness', 'Beauty', 'Events']}>
        {/* Wellness */}
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {data
            .filter((item: packageItem) => item.masterCategory === 'Wellness')
            .sort((a: packageItem, b: packageItem) => b.price - a.price)
            .map((item: packageItem) => (
              <PackageItem key={item.id} {...item} />
            ))}
        </div>

        {/* Beauty */}
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {data
            .filter((item: packageItem) => item.masterCategory === 'Beauty')
            .sort((a: packageItem, b: packageItem) => b.price - a.price)
            .map((item: packageItem) => (
              <PackageItem key={item.id} {...item} />
            ))}
        </div>

        {/* Events */}
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {data
            .filter((item: packageItem) => item.masterCategory === 'Events')
            .sort((a: packageItem, b: packageItem) => b.price - a.price)
            .map((item: packageItem) => (
              <PackageItem key={item.id} {...item} />
            ))}
        </div>
      </HorizontalTab>
    </section>
  );
};

export default AllPackages;
