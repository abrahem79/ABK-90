import { Flex, Grid, Text, cn } from '$ui';

type InfoGridProps = {
  className?: string;
  values: InfoBoxProps[];
};

export const InfoGrid = ({ values, className }: InfoGridProps) => {
  return (
    <Grid.Root
      className={cn(
        'grid-cols-3 grid-rows-[repeat(auto-fill,min-content)] gap-2',
        className,
      )}
    >
      {values.map((v, i) => (
        <InfoBox key={i} {...v} />
      ))}
    </Grid.Root>
  );
};

type InfoBoxProps = {
  label: React.ReactNode;
  children?: React.ReactNode;
  value?: React.ReactNode;
  subValue?: React.ReactNode;
  loading?: boolean;
  transparent?: boolean;
  status?: { type: 'neutral' | 'asc' | 'desc'; value: string };
};

export const InfoBox = ({
  label,
  value,
  subValue,
  children,
  status,
  transparent,
  loading,
}: InfoBoxProps) => {
  return (
    <Flex
      className={cn(
        `flex-col gap-1 ${
          transparent ? 'bg-transparent' : 'rounded-md bg-foreground/10'
        } flex-1 p-4`,
        loading ? 'loading' : 'duration-300 animate-in fade-in',
      )}
    >
      <Text className="text-sm capitalize text-foreground/40">{label}</Text>

      {children}

      <Flex
        className={cn(
          'flex-col gap-1',
          !value && value !== 0 && !subValue && !status ? 'hidden' : 'flex',
        )}
      >
        {!!value || value === 0 ? (
          <Text as="div" className="text-sm font-semibold text-foreground/80">
            {value}
          </Text>
        ) : null}

        {subValue ? (
          <Text className="text-sm text-foreground/60">{subValue}</Text>
        ) : null}

        {status ? (
          <Text className={`text-sm text-${getStatusColor(status.type)}`}>
            {status.value}
          </Text>
        ) : null}
      </Flex>
    </Flex>
  );
};

const getStatusColor = (type: string) => {
  switch (type) {
    case 'neutral': {
      return 'foreground/50';
    }
    case 'asc': {
      return 'success';
    }
    case 'desc': {
      return 'destructive';
    }
    default: {
      return 'foreground/50';
    }
  }
};
