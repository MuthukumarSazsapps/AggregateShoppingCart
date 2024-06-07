'use client';

import { Title } from 'rizzui';
import { ActionIcon } from 'rizzui';
import { PiXBold } from 'react-icons/pi';
import { cn } from 'utils';

type DrawerHeaderProps = {
  heading: string;
  onClose: () => void;
  headerClassName?: string;
};

export default function DrawerHeader({ onClose, heading, headerClassName }: DrawerHeaderProps) {
  return (
    <div
      className={cn(
        'mb-4 flex items-center justify-between border-b border-gray-200 px-4 py-[14px]',
        headerClassName,
      )}>
      <Title as="h5" className="font-semibold">
        {heading} <h1>kumar</h1>
      </Title>
      <ActionIcon variant="outline" onClick={onClose} className="border-0 p-0">
        <PiXBold className="h-auto w-5" />
      </ActionIcon>
    </div>
  );
}
