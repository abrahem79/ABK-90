import { Flex, Text } from '$ui';

export default function NotFound() {
  return (
    <Flex className="my-auto flex-col items-center justify-center gap-4">
      <img alt="Cube" src="/images/cubes.svg" className="h-[80px] w-[80px]" />

      <Text className="text-xl" as="h4">
        404
      </Text>
      <Text className="text-foreground/50">Page not found.</Text>
    </Flex>
  );
}

export const runtime = 'edge';
