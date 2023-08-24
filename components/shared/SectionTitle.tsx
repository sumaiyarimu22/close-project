import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle: string;
  color?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  color = "bg-red",
}) => {
  return (
    <div className="flex gap-2 items-start">
      <span className={cn("w-3 h-20 ", color)}></span>
      <div className="flex flex-col gap-2.5 items-start">
        <span className="uppercase text-lg tracking-[0.375em] font-semibold">
          {subtitle}
        </span>
        <h3 className="text-5xl">{title}</h3>
      </div>
    </div>
  );
};

export default SectionTitle;
