import { Stack, Text, useColorModeValue } from "@chakra-ui/react";

export default function DomotimeQualityView() {
  return (
    <Stack
      bg={useColorModeValue("gray.50", "gray.800")}
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={{ base: "left", lg: "center" }}
      direction={"column"}
    >
      <Text
        fontSize={{ base: "lg", md: "xl" }}
        textAlign={{ base: "left", lg: "center" }}
        maxW={"3xl"}
      >
        The HERMES.MF product boasts unparalleled reliability. Returns are less
        than 1 in 10,000 pieces.
        <br />
      </Text>
    </Stack>
  );
}
