import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Button,
  chakra,
  Input,
  useColorModeValue,
  VStack,
  ChakraProvider,
  ColorModeProvider,
  CSSReset,
  Flex,
  GridItem,
  Icon,
  Stack,
  List,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

import { ThemeProvider } from "@emotion/react";
import dynamic from "next/dynamic";
import Head from "next/head";
import theme from "../theme";

function Auto() {
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
  const handleBack = () => {
    history.back(); // Torna alla pagina precedente
  };
  return (
    <ChakraProvider>
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <CSSReset />
          <Button onClick={handleBack} colorScheme="blue">
                Go back
              </Button>
          <Box
            w={{ base: "full", md: 11 / 12, xl: 8 / 12 }}
            textAlign={{ base: "left", md: "left" }}
            mx="auto"
          >
            <VStack>
            <chakra.h1
  mb={10}
  mt={20}
  fontSize={{ base: "xl", md: "4xl" }}
  fontWeight={{ base: "bold", md: "extrabold" }}
  lineHeight="shorter"
>
  V2 Rolling Code Duplication with Self-Learning
</chakra.h1>

<chakra.p fontSize={"xl"} mt={"10"}>
  The remote control is now working and has successfully duplicated the code from the old remote.
  <br /> To associate the new HERMES.MF, press and hold the button until the LED stops flashing green.
</chakra.p>
<br />

<chakra.p mb={10} maxW="1000px">
  Below is the procedure for duplicating a remote control with Rolling Code for the V2 models with self-learning. <b />
  Ensure that the remote control to duplicate is a MASTER..
</chakra.p>

                  <br/>

            <GridItem colSpan={2}>
              <Stack
                mt={10}
                spacing={{ base: 10, md: 0 }}
                display={{ md: "grid" }}
                gridTemplateColumns={{ md: "repeat(1,1fr)" }}
                gridColumnGap={{ md: 8 }}
                gridRowGap={{ md: 10 }}
              >
                <UnorderedList spacing={6}>
                <Feature title="Programming Mode" index='1 '>
  <b>Press and hold</b> the button 1. Meanwhile, <b>press 4 times</b> the button 2{" "}
</Feature>
<Feature title="Release the Buttons" index='2 '>
  {" "}
  Release both buttons on the HERMES.MF
</Feature>
<Feature title="Flashing Red LED" index='3 '>
  {" "}
  At this point, the HERMES.MF light will turn <b>FLASHING RED</b> with a flashing interval of about 2 seconds{" "}
</Feature>
<Feature title="Place the Remote to Duplicate" index='4 '>
  {" "}
  Place the remote to duplicate at <b>1 - 3 cm</b> in front of the HERMES.MF
</Feature>
<Feature title="Press the Button to Duplicate" index='5 '>
  {" "}
  <b>Press and hold</b> the button on the remote to duplicate.{" "}
</Feature>
<Feature title="RED LED" index='6 '>
  {" "}
  The LED will turn <b>SOLID RED</b> and then start <b>flashing</b> again.{" "}
</Feature>
<Feature title="Source Code" index='7 '>
  {" "}
  <b>Press buttons 1 and 2</b> on the V2 remote to transmit the source code.{" "}
</Feature>
<Feature title="Green LED" index='9 '>
  At this point, the LED will turn <b>GREEN</b> and flash faster. This confirms successful duplication.
</Feature>
<Feature title="Save to a Button" index='10 '>
  Finally, press the HERMES.MF button where you want to save the just-duplicated remote.
</Feature>
<Feature title="Final Verification" index='11 '>
  Finally, verify that the HERMES.MF button has been saved by pressing a few times and checking if the LED is <b>GREEN</b>.
</Feature>

                              <br/>
                              <chakra.p mb={10}>
  Procedure for HERMES.MF models prior to 30/10/2024:
</chakra.p>
<ListItem>
  <b>Press and hold button 1</b> and <b>at the same time press button 2 four times.</b>
</ListItem>
<ListItem>
  The LED will light up <b>GREEN</b> (steady light)
</ListItem>
<ListItem>Release both buttons</ListItem>
<ListItem>
  The light will turn <b>RED</b> and flash with an interval of about 2 seconds.
</ListItem>
<ListItem>
  <b>Place the remote to be duplicated 1 – 3 cm</b> away from the HERMES.MF duplicator
</ListItem>
<ListItem>
  <b>Press and hold the button to copy</b> on the original remote
</ListItem>
<ListItem>
  The <b>RED LED</b> on the HERMES.MF duplicator will <b>change flashing mode.</b>
</ListItem>
<ListItem>
  At this point, it is necessary to <b>transmit the SOURCE CODE</b> of the original V2 remote by pressing buttons 1 and 2 simultaneously (for newer models).
</ListItem>
<ListItem>
  Release the buttons on the original remote
</ListItem>
<ListItem>
  While the <b>GREEN LED flashes</b>, press the button on the HERMES.MF duplicator where you want to save the device.
</ListItem>

                  <br/>
                  <br/>
                </UnorderedList>
              </Stack>
            </GridItem>
          </VStack>
        </Box>
      </ColorModeProvider>
    </ThemeProvider>
  </ChakraProvider>
);
}

export default Auto;
