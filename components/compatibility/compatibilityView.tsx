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
} from "@chakra-ui/react";
import { Remote, RemotesPerBrand } from "../../models/remoteModel";

import { RemoteProgrammingMethod } from "../../models/remoteModel";

import { useRouter } from "next/router";

type Props = {
  remotes: Remote[];
  setFilter: (filter: string) => void;
  remotesPerBrand: RemotesPerBrand[];
};

export default function CompatibilityView(props: Props) {
  const router = useRouter();

  const handleClickIstruzioni = (remote: Remote) => {
    if (remote.brand.includes("FAAC")) {
      if (remote.programming_method === RemoteProgrammingMethod.diretto) {
        router.push("faac_diretto");
        /*
        window
          .open(
            "https://www.domotime.com/senza-categoria/duplicazione-diretto-hermes-mf-faac/#body",
            "_blank"
          )
          ?.focus();
          */
      } else if (
        remote.programming_method === RemoteProgrammingMethod.autoapprendimento
      ) {
        router.push("autoapprendimento");
        /*
        window
          .open(
            "https://www.domotime.com/senza-categoria/duplicazione-auto-apprendimento-hermes-mf/#body",
            "_blank"
          )
          ?.focus();
          */
      } else if (
        remote.programming_method === RemoteProgrammingMethod.agire_in_ricevente
      ) {
        router.push("faac_ricevente");
        /*
        window
          .open(
            "https://www.domotime.com/senza-categoria/duplicazione-in-ricevente-hermes-mf-faac/#body",
            "_blank"
          )
          ?.focus();
          */
      }
      return;
    } else if (remote.brand.includes("BFT")) {
      router.push("autoapprendimento_bft");
      /*
      window
        .open(
          "https://www.domotime.com/senza-categoria/duplicazione-in-autoapprendimento-hermes-mf-bft/#body",
          "_blank"
        )
        ?.focus();
        */
      return;
    } else if (remote.brand.includes("V2")) {
      router.push("autoapprendimento_v2");
      /*
      window
        .open(
          "https://www.domotime.com/senza-categoria/duplicazione-in-autoapprendimento-hermes-mf-v2/#body",
          "_blank"
        )
        ?.focus();
        */
      return;
    }
    if (remote.programming_method === RemoteProgrammingMethod.diretto) {
      router.push("diretto");
      /*
      window
        .open(
          "https://www.domotime.com/senza-categoria/duplicazione-diretta-hermes-mf/#body",
          "_blank"
        )
        ?.focus();
        */
    } else if (
      remote.programming_method === RemoteProgrammingMethod.autoapprendimento
    ) {
      router.push("autoapprendimento");
      /*
      window
        .open(
          "https://www.domotime.com/senza-categoria/duplicazione-auto-apprendimento-hermes-mf/#body",
          "_blank"
        )
        ?.focus();
        */
    } else if (
      remote.programming_method === RemoteProgrammingMethod.agire_in_ricevente
    ) {
      router.push("ricevente");
      /*
      window
        .open(
          "https://www.domotime.com/senza-categoria/duplicazione-in-ricevente-hermes-mf/#body",
          "_blank"
        )
        ?.focus();
        */
    }
  };

  return (
    <Box py={{ base: 4, lg: 32 }} mx={{ base: 4, lg: 10 }}>
      <Box
        w={{ base: "full", md: 11 / 12, xl: 8 / 12 }}
        textAlign={{ base: "left", md: "center" }}
        mx="auto"
      >
        <chakra.h1
          mb={3}
          fontSize={{ base: "4xl", md: "5xl" }}
          fontWeight={{ base: "bold", md: "extrabold" }}
          color={useColorModeValue("gray.900", "gray.100")}
          lineHeight="shorter"
        >
          Find out if your remote control is compatible
        </chakra.h1>
        <chakra.p
          mb={6}
          fontSize={{ base: "lg", md: "xl" }}
          color="white.500"
          lineHeight="base"
        >
          Thanks to this tool you can instantly check if the your remote control
          is compatible. Enter the brand or model of the remote controller.
        </chakra.p>
        <Input
          width={{ base: "100%", lg: "50%" }}
          mt={10}
          size="lg"
          type="text"
          borderColor="white"
          placeholder="Enter the model or brand of the remote control.."
          _hover={{
            borderColor: 'gray.400', /* Bordo grigio quando il mouse è sopra */
            _placeholder: {
              color: 'gray.400', /* Cambia colore del placeholder quando il mouse è sopra */
            },
          }}
          _focus={{
            borderColor: 'blue.400', /* Bordo azzurro quando in focus */
            boxShadow: '0 0 0 2px blue.200', /* Illumina il bordo con azzurro */
            _placeholder: {
              color: 'blue.400', /* Colore azzurro del placeholder quando in focus */
            },
          }}
          onChange={(event) => {
            props.setFilter(event.target.value);
          }}
        />
      </Box>
      <Box w={{ base: "full", md: 11 / 12, xl: 8 / 12 }} mx="auto" mt={20}>
        {props.remotesPerBrand === undefined ? (
          <></>
        ) : (
          (props.remotesPerBrand as RemotesPerBrand[]).map(
            (remotePerBrand, index) => {
              return (
                <Box mt={20} key={index}>
                  <chakra.dt
                    fontSize="2xl"
                    fontWeight="bold"
                    lineHeight="6"
                    color={"white"}
                  >
                    {remotePerBrand.brand}
                  </chakra.dt>
                  <TableContainer mt={10}>
                    <Table>
                      <Thead>
                        <Tr w={"100%"}>
                          <Th>Model</Th>
                          <Th>Instructions Link</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {remotePerBrand.remotes.map((remote, index) => {
                          return (
                            <Tr key={index} _hover={{ color: "blue.300"}}>
                              <Td w={"70%"}>{remote.model}</Td>
                              <Td>
                                <Button
                                _hover={{
                                  bg: "blue.300", // Cambia il colore di sfondo al passaggio del mouse
                                  color: "white", // Cambia il colore del testo
                                }}
                                  onClick={() => {
                                    handleClickIstruzioni(remote);
                                  }}
                                >
                                  Instructions Link
                                </Button>
                              </Td>
                            </Tr>
                          );
                        })}
                      </Tbody>
                    </Table>
                  </TableContainer>
                </Box>
              );
            }
          )
        )}
      </Box>
    </Box>
  );
}
