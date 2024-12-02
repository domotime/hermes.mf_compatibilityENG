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
              <chakra.h1 mb={10}
                  mt={20}
                  fontSize={{ base: "xl", md: "4xl" }}
                  fontWeight={{ base: "bold", md: "extrabold" }}
                  lineHeight="shorter">
  Hormann Remote Control with Direct Duplication
</chakra.h1>
<chakra.p fontSize={"xl"} mb={10} maxW="1000px">
  To insert the new HERMES.MF remote into the receiver, duplicate the code from the original remote and verify by pressing 4/5 times on the control panel.
</chakra.p>
<br />

<chakra.p mb={10}>
  WARNING: CHECK THE COLOR OF THE HORMANN REMOTE LED BY PRESSING ANY BUTTON. <br /> 
  IF IT'S RED, FOLLOW THE INSTRUCTIONS BELOW; IF IT'S BLUE, CONTINUE WITH THESE.
</chakra.p>
<chakra.p mb={10}>
  IT WILL NOT BE POSSIBLE TO CREATE NEW COPIES USING AN HERMES REMOTE AS THE SOURCE REMOTE, <br />
  YOU WILL ALWAYS HAVE TO START FROM AN ORIGINAL HORMANN REMOTE!
</chakra.p>

                <br />
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
  <b>Press and hold</b> button 1. Meanwhile, <b>press button 2 4 times</b> {" "}
</Feature>
<Feature title="Release the buttons" index='2 '>
  {" "}
  Release both buttons on the HERMES.MF
</Feature>
<Feature title="Flashing Red LED" index='3 '>
  {" "}
  At this point, the light on the HERMES.MF will turn <b>FLASHING RED</b> with an interval of about 2 seconds {" "}
</Feature>
<Feature title="Position the remote to be duplicated" index='4 '>
  {" "}
  Place the remote to be duplicated <b>1 - 3 cm</b> in front of the HERMES.MF
</Feature>
<Feature title="Press the button to duplicate" index='5 '>
  {" "}
  <b>Press and hold</b> the button on the remote to be duplicated.{" "}
</Feature>
<Feature title="BLUE LED" index='6 '>
  {" "}
  The LED will turn <b>SOLID RED</b> and then start emitting <b>ALTERNATING BLUE and RED light</b>.{" "}
</Feature>
<Feature title="GREEN LED" index='7 '>
  {" "}
  Wait about 7 seconds. <b>The GREEN LED will flash quickly</b>.
</Feature>
<Feature title="Save to a button" index='8 '>
  Finally, press the button on the HERMES.MF where you want to save the newly duplicated remote.
</Feature>
<Feature title="Final Verification" index='9 '>
  Finally, verify that the button on the HERMES.MF was saved by pressing it a couple of times and checking if the LED is <b>GREEN</b>.
</Feature>

                                  <br/>
                                  <chakra.p mb={10}>
  Procedure for HORMANN with fixed code:{" "}
</chakra.p>
<Feature title="Programming Mode" index='1 '>
  <b>Press and hold</b> button 1. Meanwhile, <b>press button 2 4 times</b> {" "}
</Feature>
<Feature title="Release the buttons" index='2 '>
  {" "}
  Release both buttons on the HERMES.MF
</Feature>
<Feature title="Flashing Red LED" index='3 '>
  {" "}
  At this point, the light on the HERMES.MF will turn <b>FLASHING RED</b> with an interval of about 2 seconds {" "}
</Feature>
<Feature title="Position the remote to duplicate" index='4 '>
  {" "}
  Place the remote to duplicate <b>1 - 3 cm</b> in front of the HERMES.MF
</Feature>
<Feature title="Press the button to duplicate" index='5 '>
  {" "}
  <b>Press and hold</b> the button on the remote to duplicate.{" "}
</Feature>
<Feature title="RED LED" index='6 '>
  {" "}
  The LED will turn <b>SOLID RED</b> and then start <b>flashing</b>.{" "}
</Feature>
<Feature title="Press the button again to duplicate" index='7 '>
  {" "}
  <b>Press and hold again</b> the button on the remote to duplicate.{" "}
</Feature>
<Feature title="GREEN LED" index='8 '>
  At this point, the LED will turn <b>GREEN</b> and flash more quickly. This confirms the successful duplication.
</Feature>
<Feature title="Save to a button" index='9 '>
  Finally, press the button on the HERMES.MF where you want to save the duplicated remote.
</Feature>
<Feature title="Final Verification" index='10 '>
  Finally, verify that the button on the HERMES.MF has been saved by pressing it a couple of times and checking if the LED is <b>GREEN</b>.
</Feature>

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
  