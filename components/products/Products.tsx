import { data } from '@/data/product';
import SectionTitle from '../shared/SectionTitle';
import ProductItem from './ProductItem';
import { productItem } from '@/types/productItem';

const Products = () => {
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
        {data.map((item: productItem) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Products;
