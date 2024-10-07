import {
  useColorModeValue,
  Box,
  Icon,
  chakra,
  Text,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  useMediaQuery,
  useColorMode,
} from "@chakra-ui/react";
import { useRemotes } from "../../hooks/remotesHooks";
import { Remote, RemotesPerBrand } from "../../models/remoteModel";
import CompatibilityView from "../compatibility/compatibilityView";

import ImageNext from "next/image";
import { useEffect } from "react";

export default function HeroView() {
  const bg = useColorModeValue("white", "gray.800");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [remotes, setFilter, remotesPerBrand] = useRemotes();

  const [isMobile] = useMediaQuery("(min-width: 1340px)");

  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    setTimeout(() => {
      if (colorMode === "light") toggleColorMode();
    }, 1000);
  }, []);

  return (
    <Box pos="relative" overflow="hidden" bg={bg}>
      <Drawer
        onClose={() => {
          (setFilter as (filter: string) => void)("");
          onClose();
        }}
        isOpen={isOpen}
        size={"full"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>
          <DrawerBody>
            <CompatibilityView
              remotes={remotes as Remote[]}
              setFilter={setFilter as (filter: string) => void}
              remotesPerBrand={remotesPerBrand as RemotesPerBrand[]}
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Box maxW="7xl" mx="auto">
        <Box
          pos="relative"
          pb={{ base: 8, sm: 16, md: 20, lg: 28, xl: 32 }}
          maxW={{ lg: "2xl" }}
          w={{ lg: "full" }}
          zIndex={1}
          bg={bg}
          border="solid 1px transparent"
        >
          <Icon
            display={{ base: "none", lg: "block" }}
            position="absolute"
            right={0}
            top={0}
            bottom={0}
            h="full"
            w={48}
            color={bg}
            transform="translateX(50%)"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </Icon>
          <Box
            mx="auto"
            maxW={{ base: "7xl" }}
            px={{ base: 4, sm: 6, lg: 8 }}
            mt={{ base: 10, sm: 12, md: 16, lg: 20, xl: 28 }}
          >
            <Box
              w="full"
              textAlign={{ sm: "center", lg: "left" }}
              justifyContent="center"
              alignItems="center"
            >
              <chakra.h1
                fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}
                letterSpacing="tight"
                lineHeight="short"
                fontWeight="extrabold"
                color={useColorModeValue("gray.900", "white")}
              >
                <chakra.span display={{ base: "block", xl: "inline" }}>
                  Duplicator remote control{" "}
                </chakra.span>
                <chakra.span
                  display={{ base: "block", xl: "inline" }}
                  color={useColorModeValue("brand.600", "brand.400")}
                >
                  <Text
                    display={{ base: "block", lg: "inline" }}
                    w="full"
                    bgClip="text"
                    fontSize={{ base: "60px", md: "80px" }}
                    bgColor={"red.500"}
                  >
                    HERMES MF
                  </Text>
                </chakra.span>
              </chakra.h1>
              <chakra.p
                mt={{ base: 3, sm: 5, md: 5 }}
                fontSize={{ sm: "lg", md: "xl" }}
                maxW={{ sm: "xl" }}
                mx={{ sm: "auto", lg: 0 }}
                color="gray.500"
              >
                Discover the characteristics of the most flexible duplicator
                remote control on the market
              </chakra.p>
              <Button mt={10} colorScheme={"green"} onClick={onOpen}>
                Check out the compatibility
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        position={{ lg: "absolute" }}
        top={{ lg: 0 }}
        bottom={{ lg: 0 }}
        right={{ lg: 0 }}
        w={{ lg: "50%" }}
        border="solid 1px transparent"
      >
        {isMobile ? (
          <ImageNext
            src="/hermes.webp"
            className="image_next"
            alt={"Telecomando duplicatore universale HERMES.MF"}
            width={2272}
            height={2004}
            layout="responsive"
            priority
          />
        ) : (
          <></>
        )}
      </Box>
      {!isMobile ? (
        <ImageNext
          src="/hermes.webp"
          className="image_next"
          alt={"Telecomando duplicatore universale HERMES.MF"}
          width={1136}
          height={1002}
          layout="responsive"
          priority
        />
      ) : (
        <></>
      )}
    </Box>
  );
}
