'use client';

import React from 'react';

import { Flex, cn } from '$ui';
import Markdown from 'markdown-to-jsx';

interface CollectibleDescriptionProps {
  description?: string;
  loading: boolean;
}

export const CollectibleDescription = ({
  description,
  loading,
}: CollectibleDescriptionProps) => {
  return (
    <Flex
      className={cn(
        'b-l-solid [& p]:text-inherit mb-5 w-full flex-col gap-2 whitespace-normal border-l-4 border-l-border pl-3 text-foreground/50',
        loading ? 'loading-box' : '',
      )}
      aria-label="Collectible Description"
    >
      <Markdown
        options={{
          wrapper: React.Fragment,
          overrides: {
            a: {
              component: ({ children, ...props }) => (
                <a target="_blank" {...props}>
                  {children}
                </a>
              ),
            },
          },
        }}
      >
        {`${description}`}
      </Markdown>
    </Flex>
  );
};
