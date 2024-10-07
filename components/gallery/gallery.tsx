import { Box, Heading } from '@chakra-ui/react'

export default function GalleryView() {

    return (
        <Box boxSize='full'>
            <Heading
                mb={10}
            >360° View</Heading>
            <video width={1920} height={1080} loop controls>
                <source src='hermes.mp4' />
            </video>
        </Box>
    )
}