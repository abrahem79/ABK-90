'use client';

import * as React from 'react';

import { cn } from '$ui';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { type VariantProps, cva } from 'class-variance-authority';

const avatarVariants = cva(
  ['relative flex shrink-0 overflow-hidden rounded-full'],
  {
    variants: {
      size: {
        xs: 'h-3.5 w-3.5',
        sm: 'h-5 w-5',
        default: 'h-6 w-6',
        md: 'h-12 w-12',
        lg: 'h-16 w-16',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
);

interface AvatarGroupProps extends React.InputHTMLAttributes<HTMLDivElement> {
  gap?: number;
  avatarSize?: VariantProps<typeof avatarVariants>['size'];
  images: { src: string; alt?: string }[];
}

export const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  (props, ref) => {
    const { images, className, avatarSize, ...otherProps } = props;

    return (
      <div ref={ref} className={cn(`flex`, className)} {...otherProps}>
        {images.map(({ src, alt }, i) => (
          <Avatar key={i} size={avatarSize} className="-ml-1 first:ml-0">
            <AvatarImage src={src} alt={alt} />
            <AvatarFallback>AV</AvatarFallback>
          </Avatar>
        ))}
      </div>
    );
  },
);
AvatarGroup.displayName = 'AvatarGroup';

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> &
    VariantProps<typeof avatarVariants>
>(({ className, size, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(avatarVariants({ size }), className)}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn('aspect-square h-full w-full', className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      'flex h-full w-full items-center justify-center rounded-full bg-muted text-xs text-foreground/40',
      className,
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
