import {
  Flex,
  Icon,
  useColorModeValue,
  Box,
  chakra,
  SimpleGrid,
  GridItem,
  Stack,
  useMediaQuery,
} from "@chakra-ui/react";

export default function FeaturesView() {
  const [isMobile] = useMediaQuery("(min-width: 1457px)");

  const Feature = (props: any) => {
    return (
      <Flex>
        <Flex shrink={0}>
          <Icon
            boxSize={5}
            mt={1}
            mr={2}
            color={useColorModeValue("brand.500", "brand.300")}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </Icon>
        </Flex>
        <Box ml={4}>
          <chakra.dt
            fontSize="lg"
            fontWeight="bold"
            lineHeight="6"
            color={useColorModeValue("gray.900", "white")}
          >
            {props.title}
          </chakra.dt>
          <chakra.dd mt={2} color={useColorModeValue("gray.500", "gray.400")}>
            {props.children}
          </chakra.dd>
        </Box>
      </Flex>
    );
  };

  return (
    <Box bg={useColorModeValue("white", "gray.800")} py={20} mx="auto">
      <SimpleGrid
        alignItems="center"
        columns={{ base: 1, lg: 3 }}
        spacingY={{ base: 10, lg: 32 }}
        spacingX={{ base: 10, md: 0, lg: 24 }}
      >
        <Box alignSelf="start">
          <chakra.h2
            color={useColorModeValue("brand.500", "brand.500")}
            fontWeight="semibold"
            textTransform="uppercase"
            letterSpacing="wide"
            mb={10}
          >
            FEATURES
          </chakra.h2>
          <chakra.h2
            mb={3}
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="extrabold"
            textAlign={{ base: "left", md: "left" }}
            color={useColorModeValue("black", "white")}
            lineHeight="shorter"
            letterSpacing="tight"
          >
            {"Telecomando duplicatore "}
            <chakra.span color="red.500" fontSize={!isMobile ? "4xl" : "6xl"}>
              UNIVERSAL
            </chakra.span>
          </chakra.h2>
          <chakra.p
            mb={6}
            fontSize={{ base: "lg", md: "xl" }}
            textAlign={{ base: "left", sm: "left" }}
            color={useColorModeValue("gray.600", "gray.500")}
          >
            The HERMES.MF remote control duplicator is certainly one of the most
            flexible remote controls on the market. Below are the main features
            that make it the number 1.
          </chakra.p>
        </Box>
        <GridItem colSpan={2}>
          <Stack
            spacing={{ base: 10, md: 0 }}
            display={{ md: "grid" }}
            gridTemplateColumns={{ md: "repeat(2,1fr)" }}
            gridColumnGap={{ md: 8 }}
            gridRowGap={{ md: 10 }}
          >
            <Feature title="Multi-frequency">
              The remote control can memorize a spectrum of frequencies ranging
              from 290 to 900 MHz.{" "}
            </Feature>
            <Feature title="Unify your automations">
              HERMES.MF allows you to unify all installations of different
              brands and frequencies at the same time.
            </Feature>
            <Feature title="Rolling Code">
              {" "}
              It&apos;s capable of duplicating over 200 Rolling Code remote controls
              of different brands and frequencies.
            </Feature>
            <Feature title="Simple Programming">
              {" "}
              It&apos;s just hold down the first button, press for 4 times the
              second, and wait until the LED becomes green.{" "}
            </Feature>
            <Feature title="SHC Technology">
              {" "}
              Thanks to the <b>Secret Hidden Code</b> it is able to copy even i
              remote controls with advanced Rolling Code and auto-insert into
              receiving.
            </Feature>
            <Feature title="Made in Italy">
              {" "}
              It is a totally Made in Italy product{" "}
            </Feature>
          </Stack>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
}
