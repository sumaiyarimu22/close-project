import { data } from '@/data/product';
import SectionTitle from '../shared/SectionTitle';
import ProductItem from './ProductItem';
import { productItem } from '@/types/productItem';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '../ui/Button';

interface ProductsProps {
  fromProductPage?: boolean;
}

const Products: React.FC<ProductsProps> = ({ fromProductPage }) => {
  return (
    <section className='wrapper section-padding' id='products'>
      <SectionTitle
        subtitle='Products'
        title='Browse our beauty products'
        color='bg-blue'
      />

      {/* Products */}
      <div className='grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
        {/* MULTIPLE PRODUCT */}
        {!fromProductPage &&
          data
            .sort((a: productItem, b: productItem) => a.price - b.price)
            .slice(0, 8)
            .map((item: productItem) => (
              <ProductItem key={item.id} item={item} />
            ))}
        {fromProductPage &&
          data
            .sort((a: productItem, b: productItem) => a.price - b.price)
            .map((item: productItem) => (
              <ProductItem key={item.id} item={item} />
            ))}
      </div>

      {!fromProductPage && (
        <div className='mt-20 flex justify-center'>
          <Link
            href='/products'
            className={cn(buttonVariants({ variant: 'outline' }))}
          >
            View all product
          </Link>
        </div>
      )}
    </section>
  );
};

export default Products;
