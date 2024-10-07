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
import { useRemotes } from "../hooks/remotesHooks";
import { Remote, RemoteProgrammingMethod, RemotesPerBrand } from "../models/remoteModel";
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

  const [remotes, test, remotes_per_brand] = useRemotes();

  const filterBy = (remote: Remote) => {
    return (
      remote.programming_method == RemoteProgrammingMethod.diretto
    );
  };

  return (
    <ChakraProvider>
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <CSSReset />

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
                Self-learning remote control
              </chakra.h1>

              <chakra.p mb={10}>
                The procedure for duplicating is given below a remote control
                with Rolling Code with self-learning.{" "}
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
                    <ListItem>
                      <b>Press and hold key 1</b> and{" "}
                      <b>in the meantime, press key 2 4 times</b>.
                    </ListItem>
                    <ListItem>
                      The LED will turn <b>GREEN</b> (steady light)
                    </ListItem>
                    <ListItem>Release both keys</ListItem>
                    <ListItem>
                      The light will turn <b>RED</b> and flash with a
                      intermittently for about 2 seconds.
                    </ListItem>
                    <ListItem>
                      <b>
                        Position the remote control to be duplicated at 1 – 3 cm
                      </b>{" "}
                      from the HERMES.MF duplicator
                    </ListItem>
                    <ListItem>
                      <b>Press and hold the key to copy</b> del original remote
                      control
                    </ListItem>
                    <ListItem>
                      The RED LED of the HERMES.MF duplicator will become{" "}
                      <b>GREEN and will flash faster.</b> This confirms correct
                      duplication.
                    </ListItem>
                    <ListItem>
                      <b>
                        While the GREEN LED is flashing, press the button
                        HERMES.MF duplicator
                      </b>{" "}
                      on which you want to memorize the device
                    </ListItem>

                    <chakra.p fontSize={"xl"} mt={"10"}>
                      To insert the new HERMES.MF radio control in the receiver,
                      press and hold the del key remote control until the LED
                      starts flashing green light, and wait until it stops
                      flashing.
                    </chakra.p>
                  </UnorderedList>

                  <hr />
                  <chakra.h2>Compatible remotes</chakra.h2>

                  <chakra.div mb={40}>
                    {remotes_per_brand &&
                      (remotes_per_brand as RemotesPerBrand[]).map(
                        (remote, index) => {
                          return (
                            remote.remotes.filter(filterBy).length > 0 && (
                              <chakra.div key={index} m={5}>
                                <chakra.p key={index} fontSize={30}>
                                  {remote.brand}
                                </chakra.p>
                                {remote.remotes
                                  .filter(filterBy)
                                  .map((remote, index) => {
                                    return (
                                      <chakra.p key={index}>- {remote.model}</chakra.p>
                                    );
                                  })}
                              </chakra.div>
                            )
                          );
                        }
                      )}
                  </chakra.div>
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
