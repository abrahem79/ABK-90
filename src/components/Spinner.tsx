import React from 'react';

import { cn } from '$ui';

interface SpinnerProps {
  className?: string;
  label?: string;
}

export const Spinner = ({ className, label }: SpinnerProps) => {
  return (
    <svg
      className={cn('mx-auto text-foreground/50', className)}
      aria-busy="true"
      aria-live="polite"
      aria-label={label}
      width="40"
      height="20"
      viewBox="0 0 40 20"
      fill="hsl(var(--primary))"
      xmlns="http://www.w3.org/2000/svg"
      overflow="visible"
    >
      <rect x="0" y="12" width="8" height="8" fill="inherit" opacity="1">
        <animate
          attributeName="y"
          values="12;0;12;12;12"
          dur="1s"
          repeatCount="indefinite"
          calcMode="spline"
          keySplines="0.31 0.34 0.41 0.99;0.31 0.34 0.41 0.99;0.31 0.34 0.41 0.99;0.31 0.34 0.41 0.99"
        />
        <animate
          attributeName="opacity"
          values="0.5;1;0.5;0.5;0.5"
          dur="1s"
          repeatCount="indefinite"
          calcMode="spline"
          keySplines="0.31 0.34 0.41 0.99;0.31 0.34 0.41 0.99;0.31 0.34 0.41 0.99;0.31 0.34 0.41 0.99"
        />
      </rect>
      <rect x="16" y="12" width="8" height="8" fill="inherit">
        <animate
          attributeName="y"
          values="12;12;0;12;12"
          dur="1s"
          repeatCount="indefinite"
          calcMode="spline"
          keySplines="0.31 0.34 0.41 0.99;0.31 0.34 0.41 0.99;0.31 0.34 0.41 0.99;0.31 0.34 0.41 0.99"
        />
        <animate
          attributeName="opacity"
          values="0.5;0.5;1;0.5;0.5"
          dur="1s"
          repeatCount="indefinite"
          calcMode="spline"
          keySplines="0.31 0.34 0.41 0.99;0.31 0.34 0.41 0.99;0.31 0.34 0.41 0.99;0.31 0.34 0.41 0.99"
        />
      </rect>
      <rect x="32" y="12" width="8" height="8" fill="inherit">
        <animate
          attributeName="y"
          values="12;12;12;0;12"
          dur="1s"
          repeatCount="indefinite"
          calcMode="spline"
          keySplines="0.31 0.34 0.41 0.99;0.31 0.34 0.41 0.99;0.31 0.34 0.41 0.99;0.31 0.34 0.41 0.99"
        />
        <animate
          attributeName="opacity"
          values="0.5;0.5;0.5;1;0.5"
          dur="1s"
          repeatCount="indefinite"
          calcMode="spline"
          keySplines="0.31 0.34 0.41 0.99;0.31 0.34 0.41 0.99;0.31 0.34 0.41 0.99;0.31 0.34 0.41 0.99"
        />
      </rect>
    </svg>
  );
};
