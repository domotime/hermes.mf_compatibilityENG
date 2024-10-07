import {
  Flex,
  useColorModeValue,
  Text,
  Box,
  chakra,
  SimpleGrid,
  GridItem,
  Stack,
  VStack,
  Heading,
} from "@chakra-ui/react";

export default function Programm() {
  const Feature = (props: any) => {
    return (
      <Flex>
        <Flex shrink={0}>
          <Text>{props.index}</Text>
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
    <Box bg={useColorModeValue("white", "gray.800")} mx="auto">
      <Heading pt={20}>Programming Mode</Heading>
      <chakra.p
        mb={6}
        pt={6}
        fontSize={{ base: "lg", md: "xl" }}
        textAlign={{ base: "left", sm: "left" }}
        color={useColorModeValue("gray.600", "gray.500")}
      >
        The HERMES.MF universal remote control has various programming options
        to adapt to each system.
      </chakra.p>
      <VStack>
        <Box
          bg={useColorModeValue("white", "gray.800")}
          pb={{ base: 5, lg: 20 }}
          pt={{ base: 5, lg: 20 }}
          mx="auto"
        >
          <SimpleGrid
            alignItems="left"
            columns={{ base: 1, lg: 3 }}
            spacingY={{ base: 10, lg: 32 }}
            spacingX={{ base: 10, lg: 24 }}
          >
            <Box alignSelf="start">
              <chakra.h3
                color={useColorModeValue("brand.500", "white")}
                fontWeight="semibold"
                textTransform="uppercase"
                letterSpacing="wide"
              >
                Programming
              </chakra.h3>
              <chakra.h3
                mb={3}
                fontSize={{ base: "3xl", md: "4xl" }}
                fontWeight="extrabold"
                textAlign={{ base: "left", sm: "left" }}
                color={useColorModeValue("black", "white")}
                lineHeight="shorter"
                letterSpacing="tight"
              >
                Direct
              </chakra.h3>
              <chakra.p
                mb={6}
                fontSize={{ base: "lg", md: "xl" }}
                textAlign={{ base: "left", sm: "left" }}
                color={useColorModeValue("gray.600", "gray.500")}
              >
                &quot;Direct&quot; it is the simplest and it comes applied in
                all Fixed Code remote controls.
                <br />
                <br />
                In some automations, you may need to press 4/5 times the button
                in front of the receiver.
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
                <Feature title="Programming mode" index="1 ">
                  <b>Press and hold</b> key 1. Meanwhile <b>press 4 times </b>{" "}
                  the key 2{" "}
                </Feature>
                <Feature title="Green LED" index="2 ">
                  The LED will light up GREEN
                </Feature>
                <Feature title="Release the buttons" index="3 ">
                  {" "}
                  Then release both buttons of the HERMES.MF
                </Feature>
                <Feature title="Red flashing LED" index="4 ">
                  {" "}
                  At this point the light of the HERMES.MF will become{" "}
                  <b>Flashing RED</b> with an interval of about 2 seconds{" "}
                </Feature>
                <Feature
                  title="Position the remote control to be duplicated"
                  index="5 "
                >
                  {" "}
                  Position the remote control to be duplicated at{" "}
                  <b>1 - 3 cm</b> of in front of the HERMES.MF
                </Feature>
                <Feature title="Press the button to duplicate" index="6 ">
                  {" "}
                  <b>Press and hold </b> the del button remote control to
                  duplicate.{" "}
                </Feature>
                <Feature title="Green LED" index="7 ">
                  At this point the LED will turn <b>GREEN</b> and flash more
                  quickly. This confirms the correct duplication.
                </Feature>
                <Feature title="Save on a button" index="8 ">
                  Finally press the button of the HERMES.MF on which to save the
                  remote you just duplicated.
                </Feature>
              </Stack>
            </GridItem>
          </SimpleGrid>
        </Box>

        <Box
          bg={useColorModeValue("white", "gray.800")}
          pb={{ base: 5, lg: 20 }}
          pt={{ base: 5, lg: 20 }}
          mx="auto"
        >
          <SimpleGrid
            alignItems="left"
            columns={{ base: 1, lg: 3 }}
            spacingY={{ base: 10, lg: 32 }}
            spacingX={{ base: 10, lg: 24 }}
          >
            <Box alignSelf="start">
              <chakra.h3
                color={useColorModeValue("brand.500", "white")}
                fontWeight="semibold"
                textTransform="uppercase"
                letterSpacing="wide"
              >
                Programming
              </chakra.h3>
              <chakra.h3
                mb={3}
                fontSize={{ base: "3xl", md: "4xl" }}
                fontWeight="extrabold"
                textAlign={{ base: "left", sm: "left" }}
                color={useColorModeValue("black", "white")}
                lineHeight="shorter"
                letterSpacing="tight"
              >
                Self-learning
              </chakra.h3>
              <chakra.p
                mb={6}
                fontSize={{ base: "lg", md: "xl" }}
                textAlign={{ base: "left", sm: "left" }}
                color={useColorModeValue("gray.600", "gray.500")}
              >
                The &quot;Self-learning&quot; it allows to automatically
                associate the HERMES.MF with many systems Rolling Code.
                <br />
                <br />
                Once the procedure is completed, the first drive could take up
                to a few minutes.
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
                <Feature title="Programming mode" index="1 ">
                  <b>Press and hold</b> key 1. Meanwhile <b>press 4 times </b>{" "}
                  the key 2{" "}
                </Feature>
                <Feature title="Green LED" index="2 ">
                  The LED will light up GREEN
                </Feature>
                <Feature title="Release the buttons" index="3 ">
                  {" "}
                  Then release both buttons of the HERMES.MF
                </Feature>
                <Feature title="Red flashing LED" index="4 ">
                  {" "}
                  At this point the light of the HERMES.MF will become{" "}
                  <b>Flashing RED</b> with an interval of about 2 seconds{" "}
                </Feature>
                <Feature
                  title="Position the remote control to be duplicated"
                  index="5 "
                >
                  {" "}
                  Position the remote control to be duplicated at{" "}
                  <b>1 - 3 cm</b> of in front of the HERMES.MF
                </Feature>
                <Feature title="Press the button to duplicate" index="6 ">
                  {" "}
                  <b>Press and hold </b> the del button remote control to
                  duplicate.{" "}
                </Feature>
                <Feature title="Green LED" index="7 ">
                  At this point the LED will turn <b>GREEN</b> and flash more
                  quickly. This confirms the correct duplication.
                </Feature>
                <Feature title="Save on a button" index="8 ">
                  Finally press the button of the HERMES.MF on which to save the
                  remote you just duplicated.
                </Feature>
              </Stack>
            </GridItem>
          </SimpleGrid>
        </Box>

        <Box
          bg={useColorModeValue("white", "gray.800")}
          pb={{ base: 5, lg: 20 }}
          pt={{ base: 5, lg: 20 }}
          mx="auto"
        >
          <SimpleGrid
            alignItems="left"
            columns={{ base: 1, lg: 3 }}
            spacingY={{ base: 10, lg: 32 }}
            spacingX={{ base: 10, lg: 24 }}
          >
            <Box alignSelf="start">
              <chakra.h3
                color={useColorModeValue("brand.500", "white")}
                fontWeight="semibold"
                textTransform="uppercase"
                letterSpacing="wide"
              >
                Programming
              </chakra.h3>
              <chakra.h3
                mb={3}
                fontSize={{ base: "3xl", md: "4xl" }}
                fontWeight="extrabold"
                textAlign={{ base: "left", sm: "left" }}
                color={useColorModeValue("black", "white")}
                lineHeight="shorter"
                letterSpacing="tight"
              >
                Act in receiver
              </chakra.h3>
              <chakra.p
                mb={6}
                fontSize={{ base: "lg", md: "xl" }}
                textAlign={{ base: "left", sm: "left" }}
                color={useColorModeValue("gray.600", "gray.500")}
              >
                Programming that requires adding to the receiver allows you to
                automatically associate the HERMES.MF with many rolling code
                systems.
                <br />
                <br />
                Once the procedure is completed, the remote control will be
                compatible with automation, but will need to be added manually
                in the receiver.
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
                <Feature title="Programming Mode" index="1 ">
                  <b>Press and hold</b> key 1. Meanwhile <b>press 4 times </b>{" "}
                  the key 2{" "}
                </Feature>
                <Feature title="Green LED" index="2 ">
                  The LED will light up GREEN
                </Feature>
                <Feature title="Release the keys" index="3 ">
                  {" "}
                  Then release both buttons of the HERMES.MF
                </Feature>
                <Feature title="Flashing red LED" index="4 ">
                  {" "}
                  At this point the light of the HERMES.MF will become{" "}
                  <b>Flashing RED</b> with an interval of about 2 seconds{" "}
                </Feature>
                <Feature
                  title="Position the remote control to be duplicated"
                  index="5 "
                >
                  {" "}
                  Position the remote control to be duplicated at{" "}
                  <b>1 - 3 cm</b> of in front of the HERMES.MF
                </Feature>
                <Feature title="Press the button to duplicate" index="6 ">
                  {" "}
                  <b>Press and hold </b> the del button remote control to
                  duplicate.{" "}
                </Feature>
                <Feature title="Green LED" index="7 ">
                  At this point the LED will turn <b>GREEN</b> and flash more
                  quickly. This confirms the correct duplication.
                </Feature>
                <Feature title="Save on a button" index="8 ">
                  Finally press the button of the HERMES.MF on which to save the
                  remote you just duplicated.
                </Feature>
              </Stack>
            </GridItem>
          </SimpleGrid>
        </Box>
      </VStack>
    </Box>
  );
}
