import { data } from '@/data/packages';
import { packageItem } from '@/types/packageItem';
import PackageDetailsSection from '@/components/package-details/PackageDetailsSection';
import FooterMini from '@/components/shared/footer/FooterMini';
import Navbar from '@/components/shared/navbar/Navbar';

const PackageDetailsPage = ({ params }: { params: { id: string } }) => {
  const id = +params.id;

  const packageItem = data.find((item: packageItem) => item.id === id);
  if (!packageItem) {
    return null;
  }
  return (
    <>
      <Navbar />
      <main>
        <PackageDetailsSection packageItem={packageItem} />
      </main>
      <FooterMini />
    </>
  );
};

export default PackageDetailsPage;
