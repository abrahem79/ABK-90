'use client';

import { Badge, CloseIcon, Text } from '$ui';
import { filters$ } from '../FilterStore';

type IntBadgeProps = {
  name: string;
  min?: number | undefined;
  max?: number | undefined;
};

export const IntBadge = ({ name, min, max }: IntBadgeProps) => {
  return (
    <Badge size="lg" variant="outline" className="capitalize">
      {name}:&nbsp; <Text className="text-foreground">{min}</Text>&nbsp;to&nbsp;
      <Text className="text-foreground">{max}</Text>
      <CloseIcon
        className="ml-2 cursor-pointer"
        onClick={() => {
          filters$.deleteFilter(name);
        }}
      />
    </Badge>
  );
};
