import { Flex, useColorModeValue, Text, Box, chakra, SimpleGrid, GridItem, Stack, VStack, Heading } from "@chakra-ui/react";

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
    }

    return (
        <Box
            bg={useColorModeValue("white", "gray.800")}
            mx="auto"
        >
            <Heading
                pt={20}
            >Programming Modes</Heading>
            <chakra.p
                mb={6}
                pt={6}
                fontSize={{ base: "lg", md: "xl" }}
                textAlign={{ base: "left", sm: "left" }}
                color={useColorModeValue("gray.600", "gray.500")}
            >
The universal remote control HERMES.MF has various programming modes to adapt to any system.            </chakra.p>
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
                                Programming on Receiver
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
                                fontSize={{ base: "lg", md: "l" }}
                                textAlign={{ base: "left", sm: "left" }}
                                color={useColorModeValue("gray.400", "gray.400")}
                            >
                                The "Direct" programming is the simplest and is applied in all Fixed Code remotes.
                                <br /><br />
                                In some automations, it may be necessary to press the button in front of the receiver 4/5 times.
                            </chakra.p>
                            
                            <chakra.h3
                                mb={3}
                                fontSize={{ base: "3xl", md: "4xl" }}
                                fontWeight="extrabold"
                                textAlign={{ base: "left", sm: "left" }}
                                color={useColorModeValue("black", "white")}
                                lineHeight="shorter"
                                letterSpacing="tight"
                            >
                                Auto-learning
                            </chakra.h3>
                            <chakra.p
                                mb={6}
                                fontSize={{ base: "lg", md: "l" }}
                                textAlign={{ base: "left", sm: "left" }}
                                color={useColorModeValue("gray.600", "gray.400")}
                            >
                               The "Auto-learning" programming allows the HERMES.MF to automatically pair with many Rolling Code systems.
                                <br /><br />
                                Once the procedure is completed, the first operation may take up to a few minutes.
                            </chakra.p>
                            
                            <chakra.h3
                                mb={3}
                                fontSize={{ base: "3xl", md: "4xl" }}
                                fontWeight="extrabold"
                                textAlign={{ base: "left", sm: "left" }}
                                color={useColorModeValue("black", "white")}
                                lineHeight="shorter"
                                letterSpacing="tight"
                            >
                                Act in Receiver
                            </chakra.h3>
                            <chakra.p
                                mb={6}
                                fontSize={{ base: "lg", md: "l" }}
                                textAlign={{ base: "left", sm: "left" }}
                                color={useColorModeValue("gray.600", "gray.400")}
                            >
                                The programming that requires adding the receiver allows the HERMES.MF to automatically pair with many Rolling Code systems.
                                <br /><br />
                                Once the procedure is completed, the remote control will be compatible with the automation, but it will need to be manually added to the receiver.
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
                                <Feature title="Programming on Remote Control">
                                <chakra.h3
                                          mb={3}
                                          fontSize={{ base: "3xl", md: "4xl" }}
                                          fontWeight="extrabold"
                                          color={useColorModeValue("black", "white")}
                                          lineHeight="shorter"
                                          letterSpacing="tight"
                                          >
                                     FIXED CODES
                                </chakra.h3>
                                </Feature>
                                <Feature title="">
                                    <b></b>{" "}
                                </Feature>
                                <Feature title="Programming Mode" index='1 '>
    <b>Press and hold</b> button 1. Meanwhile, <b>press button 2 four times</b>.
</Feature>
<Feature title="Release the buttons" index='2 '>
    {" "}
    Release both buttons of the HERMES.MF.
</Feature>
<Feature title="Flashing red LED" index='3 '>
    {" "}
    At this point, the light of the HERMES.MF will become <b>FLASHING RED</b> with a blinking interval of about 2 seconds.
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
    At this point, the LED will turn <b>GREEN</b> and flash more rapidly. This confirms successful duplication.
</Feature>
<Feature title="Save to a button" index='9 '>
    Finally, press the button on the HERMES.MF to save the duplicated remote.
</Feature>
<Feature title="Final Verification" index='10 '>
    Finally, verify that the HERMES.MF button has been saved by pressing it a couple of times and checking if the LED is <b>GREEN</b>.
</Feature>


                                <chakra.h3
                                          mb={3}
                                          fontSize={{ base: "3xl", md: "4xl" }}
                                          fontWeight="extrabold"
                                          color={useColorModeValue("black", "white")}
                                          lineHeight="shorter"
                                          letterSpacing="tight"
                                          >
                                    SIMPLE ROLLING CODES
                                </chakra.h3>
                                <Feature title="">
                                    <b></b>{" "}
                                </Feature>
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


                                <chakra.h3
                                          mb={3}
                                          fontSize={{ base: "3xl", md: "4xl" }}
                                          fontWeight="extrabold"
                                          color={useColorModeValue("black", "white")}
                                          lineHeight="shorter"
                                          letterSpacing="tight"
                                          >
                                    COMPLEX ROLLING CODES
                                </chakra.h3>
                                <Feature title="">
                                    <b></b>{" "}
                                </Feature>
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
<Feature title="Source Code" index='7 '>
    {" "}
    <b>Press buttons 1 and 2</b> on the remote to duplicate until it starts flashing.
</Feature>
<Feature title="Press the button to duplicate again" index='8 '>
    {" "}
    <b>Press and hold again</b>.
</Feature>
<Feature title="Green LED" index='9 '>
    At this point, the LED will turn <b>GREEN</b> and flash faster. This confirms successful duplication.
</Feature>
<Feature title="Save to a button" index='10 '>
    Finally, press the button on the HERMES.MF to save the duplicated remote.
</Feature>
<Feature title="Final Verification" index='11 '>
    Finally, verify that the HERMES.MF button has been saved by pressing it a couple of times and checking if the LED is <b>GREEN</b>.
</Feature>


                            </Stack>
                        </GridItem>
                    </SimpleGrid>
                </Box>
            </VStack>
        </Box>
    );
}
