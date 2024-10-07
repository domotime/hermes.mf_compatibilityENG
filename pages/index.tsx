import { Box, VStack, useMediaQuery, CSSReset, ColorModeProvider, ChakraProvider, useColorMode } from '@chakra-ui/react'
import { ThemeProvider } from '@emotion/react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import theme from '../theme'

const FeaturesView = dynamic(() => import('../components/features/features'))
const ProgrammingView = dynamic(() => import('../components/features/programming'))
const Footer = dynamic(() => import('../components/footer/footer'))
const GalleryView = dynamic(() => import('../components/gallery/gallery'))
const HeroView = dynamic(() => import('../components/hero/heroView'))
const DomotimeQualityView = dynamic(() => import('../components/quality/domotimeQualityView'))

const Home = () => {
  const [isMobile] = useMediaQuery("(min-width: 1340px)")
  

  let body =
    <>
      <Head>
        <title>Universal Duplicator Remote Control</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta name="description" content="The HERMES.MF universal duplicator remote control is designed to duplicate the vast majority of remote controls available on the market, ranging from 290 to 900 MHz." />
        <meta name="keywords" content="Duplicator remote control, universal duplicator, remote control." />
        <meta property="og:title" content="Universal Duplicator Remote Control" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.imdb.com/title/tt0117500/" />
        <meta property="og:image" content="https://ia.media-imdb.com/images/rock.jpg" />
        <meta charSet="utf-8"></meta>
        <link rel="icon" href="/favicon.gif"></link>
      </Head>

      <HeroView />
      <Box
        px={isMobile ? 20 : 5}
      >
        <VStack>
          <Box>
            <FeaturesView />
            <GalleryView />
            <ProgrammingView />
            <DomotimeQualityView />
          </Box>
        </VStack>
      </Box>
      <Footer />
    </>

  return (
    <ChakraProvider>
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <CSSReset />
          {body}
        </ColorModeProvider>
      </ThemeProvider>
    </ChakraProvider>

  )
}

export default Home
