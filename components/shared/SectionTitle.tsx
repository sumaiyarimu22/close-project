import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle: string;
  color?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  color = 'bg-red',
}) => {
  return (
    <div className='mb-16 flex items-start gap-2'>
      <span className={cn('h-20 w-3 ', color)}></span>
      <div className='flex flex-col items-start gap-2.5'>
        <span className='text-lg font-semibold uppercase tracking-[0.375em]'>
          {subtitle}
        </span>
        <h3 className='text-5xl'>{title}</h3>
      </div>
    </div>
  );
};

export default SectionTitle;
