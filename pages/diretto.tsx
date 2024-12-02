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

function Diretto() {
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
  Direct Programming Remote Control
</chakra.h1>
<chakra.p fontSize={"xl"} mb={10} maxW="1000px">
  To insert the new HERMES.MF remote control into the receiver, duplicate the code from the original remote and verify by pressing 4/5 times on the control panel.
</chakra.p>
<br />
<chakra.p mb={10}>
  Below is the procedure for duplicating a Fixed Code remote control with Direct Programming:
</chakra.p>


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
    <b>Press and hold</b> button 1. Meanwhile, <b>press button 2 four times</b>.
</Feature>
<Feature title="Release the buttons" index='2 '>
    {" "}
    Release both buttons of the HERMES.MF.
</Feature>
<Feature title="Flashing red LED" index='3 '>
    {" "}
    At this point, the light of the HERMES.MF will turn <b>FLASHING RED</b> with a blinking interval of about 2 seconds.
</Feature>
<Feature title="Position the remote to duplicate" index='4 '>
    {" "}
    Place the remote to duplicate <b>1 - 3 cm</b> in front of the HERMES.MF.
</Feature>
<Feature title="Press the button to duplicate" index='5 '>
    {" "}
    <b>Press and hold</b> the button on the remote to duplicate.
</Feature>
<Feature title="RED LED" index='6 '>
    {" "}
    The LED will turn <b>STEADY RED</b> and then start <b>flashing</b>.
</Feature>
<Feature title="Press the button to duplicate again" index='7 '>
    {" "}
    <b>Press and hold again</b> the button on the remote to duplicate.
</Feature>
<Feature title="Green LED" index='8 '>
    At this point, the LED will turn <b>GREEN</b> and flash faster. This confirms successful duplication.
</Feature>
<Feature title="Save to a button" index='9 '>
    Finally, press the button on the HERMES.MF to save the duplicated remote.
</Feature>
<Feature title="Final Verification" index='10 '>
    Finally, verify that the HERMES.MF button has been saved by pressing it a couple of times and checking if the LED is <b>GREEN</b>.
</Feature>
                    <br/>
                    <chakra.p mb={10}>
  Procedure for HERMES.MF before 30/10/2024:
</chakra.p>

<ListItem>
  <b>Press and hold button 1</b> and <b>press button 2 four times</b> in the meantime.
</ListItem>
<ListItem>
  The LED will light up in <b>GREEN</b> (steady light).
</ListItem>
<ListItem>Release both buttons.</ListItem>
<ListItem>
  The light will turn <b>RED</b> and flash with a 2-second interval.
</ListItem>
<ListItem>
  <b>Place the remote control to be copied 1 – 3 cm</b> away from the HERMES.MF duplicator.
</ListItem>
<ListItem>
  <b>Press and hold the button to copy</b> on the original remote control.
</ListItem>
<ListItem>
  The RED LED of the HERMES.MF duplicator will turn <b>GREEN and flash faster.</b> This confirms the successful duplication.
</ListItem>
<ListItem>
  <b>While the GREEN LED flashes, press the button on the HERMES.MF duplicator</b> where you want to store the device.
</ListItem>

                    <br/>
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

export default Diretto;

