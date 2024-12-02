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

function DirectFaac() {
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
  FAAC Remote Control with Direct Duplication
</chakra.h1>
<chakra.p fontSize={"xl"} mb={10} maxW="1000px">
  To insert the new HERMES.MF into the receiver, duplicate the code from the original remote control and verify by pressing 4/5 times on the control panel.
</chakra.p>
<br />

<chakra.p mb={10}>
  Below is the procedure for duplicating a remote control with a Rolling Code for FAAC models with direct learning. <br />
  Ensure that the remote control to duplicate is a <b>MASTER</b>.
</chakra.p>

              <br />

              <chakra.p mb={10}>
  Below is the procedure for duplicating a remote control with a Rolling Code for FAAC models with direct learning. <br />
  Ensure that the remote control to duplicate is a <b>MASTER</b>.
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
  <b>Press and hold</b> button 1. Meanwhile, <b>press button 2 4 times</b>.
</Feature>
<Feature title="Release the buttons" index='2 '>
  Release both buttons on the HERMES.MF.
</Feature>
<Feature title="Flashing Red LED" index='3 '>
  At this point, the HERMES.MF light will turn <b>RED flashing</b> with an interval of about 2 seconds.
</Feature>
<Feature title="Position the remote control to duplicate" index='4 '>
  Place the remote control to duplicate <b>1 - 3 cm</b> in front of the HERMES.MF.
</Feature>
<Feature title="Press the button to duplicate" index='5 '>
  <b>Press and hold</b> the button of the remote control to duplicate.
</Feature>
<Feature title="RED LED" index='6 '>
  The LED will turn <b>RED SOLID</b> and then start <b>flashing</b> again.
</Feature>
<Feature title="Source Code" index='7 '>
  <b>Press buttons 1 and 2</b> on the remote control to duplicate until it starts flashing.
</Feature>
<Feature title="Press the button to duplicate again" index='8 '>
  <b>Press and hold again</b>.
</Feature>
<Feature title="Green LED" index='9 '>
  At this point, the LED will turn <b>GREEN</b> and flash faster. This confirms the successful duplication.
</Feature>
<Feature title="Save to a button" index='10 '>
  Finally, press the HERMES.MF button where you want to save the newly duplicated remote.
</Feature>
<Feature title="Final Check" index='11 '>
  Finally, verify that the HERMES.MF button has been saved by pressing it a couple of times and checking if the LED is <b>GREEN</b>.
</Feature>

                                <br/>
                                <chakra.p mb={10}>
  Procedure for HERMES.MF models before 30/10/2024:
</chakra.p>
<ListItem>
  <b>Press and hold</b> button 1 and <b>press button 2 4 times</b> in the meantime.
</ListItem>
<ListItem>
  The LED will light up in <b>GREEN</b> (solid light).
</ListItem>
<ListItem>
  Release both buttons.
</ListItem>
<ListItem>
  The light will turn <b>RED</b> and start flashing with an interval of about 2 seconds.
</ListItem>
<ListItem>
  <b>Place the remote control to duplicate 1 - 3 cm</b> away from the HERMES.MF duplicator.
</ListItem>
<ListItem>
  <b>Press and hold the button to copy</b> on the original remote control.
</ListItem>
<ListItem>
  The <b>RED LED</b> on the HERMES.MF duplicator will <b>change flashing mode.</b>
</ListItem>
<ListItem>
  At this point, it is necessary to <b>emit the SOURCE CODE</b> from the original FAAC remote by pressing buttons 1 and 2 simultaneously until the LED starts flashing.
</ListItem>
<ListItem>
  <b>Release the buttons</b> on the original remote control.
</ListItem>
<ListItem>
  <b>Press the button on the original remote</b> and wait for the LED on the HERMES.MF to start flashing <b>GREEN</b>.
</ListItem>
<ListItem>
  <b>While the GREEN LED is flashing, press the button on the HERMES.MF duplicator</b> where you want to save the device.
</ListItem>

                    <br />
                    <br />
                    <br />

                    
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

export default DirectFaac;
