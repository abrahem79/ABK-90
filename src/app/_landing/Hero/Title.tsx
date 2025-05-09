'use client';

import { Box, Text, cn } from '$ui';

type TitleProps = {
  title: string;
  className?: string;
};

export const Title = ({ title, className }: TitleProps) => (
  <Box>
    <Text
      title={title}
      as="h1"
      className={cn(
        'ellipsis text-4xl font-bold text-foreground/90',
        className,
      )}
    >
      {title}
    </Text>
  </Box>
);
