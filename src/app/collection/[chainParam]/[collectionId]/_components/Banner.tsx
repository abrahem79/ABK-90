import { classNames } from '~/config/classNames';

import { Box, cn } from '$ui';

const supportedVideoExtensions: Array<'mp4'> = ['mp4'];

type CollectionBannerProps = {
  bannerUrl: string | undefined;
};

const CollectionBanner = ({ bannerUrl }: CollectionBannerProps) => {
  const isVideo = !!bannerUrl
    ? supportedVideoExtensions.some((value) => bannerUrl.endsWith(value))
    : false;

  return (
    <Box
      className={cn(
        classNames.collectionBanner,
        'relative flex h-full w-full items-center justify-center overflow-hidden bg-foreground/10',
      )}
      style={{
        backgroundImage: !isVideo ? 'var(--bannerUrl)' : 'none',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top',
        backgroundSize: 'cover',
      }}
    >
      {!!isVideo && (
        <video
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
          style={{ position: 'absolute', width: '100%' }}
        >
          <source src={bannerUrl} type="video/mp4" />
        </video>
      )}
    </Box>
  );
};

export default CollectionBanner;
