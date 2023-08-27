import { packageItem } from '@/types/packageItem';

interface PackageDetailsSectionProps {
  packageItem: packageItem;
}

const PackageDetailsSection: React.FC<PackageDetailsSectionProps> = ({
  packageItem,
}) => {
  return (
    <section className='wrapper section-padding'>{packageItem.title}</section>
  );
};

export default PackageDetailsSection;
