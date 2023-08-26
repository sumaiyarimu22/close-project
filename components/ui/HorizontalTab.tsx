'use client';
import { cn } from '@/lib/utils';
import React, { useCallback, useState } from 'react';

interface HorizontalTabProps {
  tabs: string[];
  children: React.ReactNode;
  onClick?: () => void;
}

const HorizontalTab: React.FC<HorizontalTabProps> = ({
  tabs,
  children,
  onClick,
}) => {
  const [shouldOpenTab, setShouldOpenTab] = useState<Number>(0);
  const handleClick = useCallback(
    (index: number) => {
      setShouldOpenTab(index);
      onClick && onClick;
    },
    [onClick]
  );

  return (
    <div className='flex flex-col gap-16'>
      {/* TABS */}
      <div className='flex items-center self-center'>
        {tabs?.map((tab: string, index: number) => (
          <button
            onClick={() => handleClick(index)}
            key={index}
            className={cn(
              'flex h-[4rem] w-[12rem] items-center justify-center whitespace-nowrap border border-grey px-6 py-2 text-center text-lg font-semibold uppercase tracking-widest',
              index === 0 && 'rounded-bl-2xl',
              index === tabs.length - 1 && 'rounded-tr-2xl',
              shouldOpenTab === index && 'border-dark bg-dark text-light'
            )}
          >
            {tab}
          </button>
        ))}
      </div>
      {/* CONTANTS */}
      <div>
        {React.Children.toArray(children)?.map(
          (item: React.ReactNode, index: number) => (
            <div
              className={cn(shouldOpenTab === index ? 'block' : 'hidden')}
              key={index}
            >
              {item}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default HorizontalTab;
