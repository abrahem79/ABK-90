'use client';

import { Badge, CloseIcon, Text } from '$ui';
import { filters$ } from '../FilterStore';

type StringAndArrayBadge = {
  filter: {
    name: string;
    values?: string[];
  };
};

export const StringAndArrayBadge = ({ filter }: StringAndArrayBadge) => {
  const { name, values = [] } = filter;

  return (
    <Badge size="lg" variant="outline" className="capitalize">
      {name}:&nbsp;<Text className="text-foreground">{values.join(', ')}</Text>
      <CloseIcon
        className="ml-2 cursor-pointer"
        onClick={() => {
          filters$.deleteFilter(name);
        }}
      />
    </Badge>
  );
};
