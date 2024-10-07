import {
    Box,
    Container,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';


export default function Footer() {
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container
                as={Stack}
                w={'100vw'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                justify={{ base: 'center', md: 'space-around' }}
                align={{ base: 'center', md: 'center' }}>
                <Text><a href='https://www.domotime.com'></a></Text>
                <Text><a href='tel:+39 030 9913901'></a></Text>
            </Container>
        </Box>
    );
}