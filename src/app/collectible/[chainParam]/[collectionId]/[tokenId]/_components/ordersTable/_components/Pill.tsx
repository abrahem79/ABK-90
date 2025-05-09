import { Flex } from '~/components/ui';

const Pill = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex className="items-center justify-center w-full gap-1 bg-foreground/5 rounded-[4px] px-2 py-1">
      {children}
    </Flex>
  );
};

export default Pill;
