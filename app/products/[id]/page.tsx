import { data } from '@/data/product';
import { productItem } from '@/types/productItem';
import ProductDetailsSection from '@/components/product-details/ProductDetailsSection';
import FooterMini from '@/components/shared/footer/FooterMini';
import Navbar from '@/components/shared/navbar/Navbar';

const ProductDetailsPage = ({ params }: { params: { id: string } }) => {
  const product = data.find((item: productItem) => item.id === +params.id);

  if (!product) {
    return null;
  }

  return (
    <>
      <Navbar />
      <ProductDetailsSection product={product} />
      <FooterMini />
    </>
  );
};

export default ProductDetailsPage;
