import { Image, Text, VStack, useColorModeValue } from '@chakra-ui/react'


const PageNotFound = () => {
    const color = useColorModeValue("red.500", "#2a9df4");
  return (
    <VStack mb={10} mt={10}>
        <Image height="180px" src='\img\pageNotfound.png'/>
        <Text color={color} fontSize={{base:"sm",md:"md",lg:"2xl"}} fontWeight="bold" >We can't seem to find the page you are looking for</Text>
    </VStack>
  )
}

export default PageNotFound